package com.real.estate.palmland.controller;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.real.estate.palmland.entity.Subscribe;
import com.real.estate.palmland.model.EmailRequest;
import com.real.estate.palmland.repository.SubscribeRepository;
import com.real.estate.palmland.service.EmailService;

import jakarta.mail.MessagingException;
import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/api/v1/email")
@RequiredArgsConstructor
public class EmailController {

    @Autowired
    private  EmailService emailService;

    @Autowired
    private SubscribeRepository subscribeRepository;

    @PostMapping("/subscribe")
    public ResponseEntity<String> subscribe(@RequestBody Subscribe subscribe) throws MessagingException {
        subscribe.setSubscribed(true);
        Subscribe savedSubscriber = subscribeRepository.save(subscribe);
        if(savedSubscriber!=null) {
            emailService.sendSimpleMail(subscribe);
        }
        return ResponseEntity.status(HttpStatus.CREATED).body("Subscribed successfully");
    }
    @PostMapping("/unsubscribe")
    public ResponseEntity<String> unSubscribe(@RequestBody Subscribe subscribe) throws MessagingException {
        Optional<Subscribe> dbObject = subscribeRepository.findByEmail(subscribe.getEmail());
        Subscribe updateSubscribe = null;
        if(dbObject.isPresent()){
            dbObject.get().setSubscribed(false);
            updateSubscribe =  subscribeRepository.save(dbObject.get());
        }
      if(updateSubscribe!=null)
        emailService.sendSimpleMail(subscribe);

        return ResponseEntity.status(HttpStatus.CREATED).body("Unsubscribed successful");
    }

    @PostMapping("/send-email")
    public void sendEmail(@RequestBody EmailRequest emailRequest) throws MessagingException {
        String to = emailRequest.getTo();
        String subject = emailRequest.getSubject();
        String body = emailRequest.getBody();
        emailService.sendEmailWithAttachment(to, subject, body);
    }


}
