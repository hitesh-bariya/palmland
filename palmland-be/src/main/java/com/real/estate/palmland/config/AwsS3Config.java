package com.real.estate.palmland.config;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import com.amazonaws.auth.AWSCredentials;
import com.amazonaws.auth.AWSStaticCredentialsProvider;
import com.amazonaws.auth.BasicAWSCredentials;
import com.amazonaws.services.s3.AmazonS3;
import com.amazonaws.services.s3.AmazonS3ClientBuilder;

import lombok.extern.slf4j.Slf4j;

@Slf4j
@Configuration
public class AwsS3Config {
    
    @Value("${aws.cloud.credentials.access-key}")
    private String accessKey;
    
    @Value("${aws.cloud.credentials.secret-key}")
    private String secretKey;
    
    @Value("${aws.cloud.region.static}")
    private String region;

    @Bean
    public AmazonS3 s3Client() {
    	try {
    		AWSCredentials awsCredentials =
                    new BasicAWSCredentials(accessKey, secretKey);
            return AmazonS3ClientBuilder
                    .standard()
                    .withRegion(region)
                    .withCredentials(new AWSStaticCredentialsProvider(awsCredentials))
                    .build();
    	}catch(Exception e) {
    		log.info("Error in s3Client for :: ",e.getMessage());
    	}
    	return null;
    }

}
