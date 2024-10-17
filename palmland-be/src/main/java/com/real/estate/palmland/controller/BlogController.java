package com.real.estate.palmland.controller;

import java.io.IOException;
import java.util.Date;
import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.real.estate.palmland.entity.Blog;
import com.real.estate.palmland.model.BlogLikeRequest;
import com.real.estate.palmland.model.BlogRequest;
import com.real.estate.palmland.model.BlogResponse;
import com.real.estate.palmland.service.BlogService;

import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.validation.Valid;

@RestController
@RequestMapping("/api/v1/blog")
@Tag(name = "Blogs")
public class BlogController {

	private static final Logger LOGGER = LoggerFactory.getLogger(BlogController.class);

	@Autowired
	private BlogService blogService;

	@Autowired
	private ObjectMapper objectMapper;

	@PostMapping("/create")
	public BlogResponse createBlogs(@RequestParam(value = "jsondata", required = true) @Valid String jsondata,
			@RequestParam(value = "files", required = true) @Valid MultipartFile files) throws IOException {
		BlogRequest blogRequest = objectMapper.readValue(jsondata, BlogRequest.class);
		Blog blog = prepareEntityObject(blogRequest, files);
		return blogService.create(files, blog);
	}

	@GetMapping("/all")
	public ResponseEntity<List<Blog>> getAllAgents(@RequestParam(defaultValue = "0") Integer pageNo,
			@RequestParam(defaultValue = "10") Integer pageSize, @RequestParam(defaultValue = "id") String sortBy) {
		List<Blog> blogs = blogService.findAllBlogs(pageNo, pageSize, sortBy);
		return new ResponseEntity<>(blogs, HttpStatus.OK);
	}

	@DeleteMapping("/{id}")
	public ResponseEntity<String> deleteAgent(@PathVariable(name = "id") Integer id) {
		blogService.deleteAgent(id);
		return new ResponseEntity<>("Blog successfully deleted!", HttpStatus.OK);
	}
	
	@GetMapping("/{id}")
	public ResponseEntity<Blog> getBlogById(@PathVariable(name = "id") Integer id) {
		
		return new ResponseEntity<>(blogService.getBlogById(id), HttpStatus.OK);
	}

	private Blog prepareEntityObject(BlogRequest blogRequest, MultipartFile multipartFile) throws IOException {
		Blog blog = new Blog();
		blog.setAuthor(blogRequest.getAuthor());
		blog.setHeading(blogRequest.getHeading());
		blog.setContent(blogRequest.getContent());
		blog.setPostedDate(new Date());
		return blog;
	}

	@PostMapping("/likes")
	public ResponseEntity<Blog> blockLikes(@RequestBody BlogLikeRequest blogLikeRequest) {
		return new ResponseEntity<>(blogService.blogLikes(blogLikeRequest), HttpStatus.OK);
	}
}
