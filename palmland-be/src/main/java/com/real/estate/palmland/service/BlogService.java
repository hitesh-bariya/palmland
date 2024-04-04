package com.real.estate.palmland.service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.real.estate.palmland.entity.Blog;
import com.real.estate.palmland.model.BlogLikeRequest;
import com.real.estate.palmland.model.BlogResponse;
import com.real.estate.palmland.repository.BlogRepository;

@Service
public class BlogService {
	
    @Autowired
    private BlogRepository blogRepository;
    
    @Autowired
	private StorageService storageService;
    
	@Value("${aws.cloud.credentials.url}")
	private String awsURL;
    
    public BlogResponse create(MultipartFile multipartFile,Blog blog){
        Blog blog1= blogRepository.save(blog);
        if(blog1 !=null){
        	storageService.uploadBlog(multipartFile,blog);
            BlogResponse blogResponse=new BlogResponse();
            blogResponse.setId(blog1.getId());
            blogResponse.setHeading(blog1.getHeading());
            blogResponse.setContent(blog1.getContent());
            blogResponse.setPostedDate(blog1.getPostedDate());
            blogResponse.setAuthor(blog1.getAuthor());
            blogResponse.setImageKey(blog1.getImageKey());
            return blogResponse;
        }
        return null;
    }
    public void deleteAgent(Integer id){
        blogRepository.deleteById(id);
    }

    public List<Blog> findAllBlogs(Integer pageNo, Integer pageSize, String sortBy){
        Pageable paging= PageRequest.of(pageNo,pageSize, Sort.by(sortBy));
        Page<Blog> agentEntity=blogRepository.findAll(paging);
        if(agentEntity.hasContent()) {
        	
        	List<Blog> list=agentEntity.getContent();
        	if(!list.isEmpty()) {
        		for(Blog blog:list) {
        			blog.setImageKey(awsURL + "/" + blog.getImageKey().replaceAll("@", "%40"));
        		}
        	}
        	
            return list;
        } else {
            return new ArrayList<Blog>();
        }

    }
    
    public Blog blogLikes(BlogLikeRequest blogLikeRequest){
    	Optional<Blog> blogData=blogRepository.findById(blogLikeRequest.getBlogId());
    	if(blogData.isPresent()) {
    		Blog blog=blogData.get();
    		blog.setLikeCount(blog.getLikeCount()+1);
    		return blogRepository.save(blog);
    	}
    	return null;
    }
}
