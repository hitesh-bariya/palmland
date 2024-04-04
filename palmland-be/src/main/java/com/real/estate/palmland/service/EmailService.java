package com.real.estate.palmland.service;

import com.real.estate.palmland.entity.Subscribe;
import jakarta.mail.MessagingException;
import jakarta.mail.internet.MimeMessage;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.core.io.ClassPathResource;
import org.springframework.mail.MailException;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;

@Service
public class EmailService {
    private static final Logger LOGGER = LoggerFactory.getLogger(EmailService.class);
    @Autowired
    private JavaMailSender mailSender;
    @Value("${spring.mail.username}") private String sender;
    private static final String PALMLAND_SUBJECT = "Palmland Newsletter and Blogs updates";
    //TODO: subj, body get import from app properties
    private static final String PALMLAND_BODY = "Thank you for subscribing, you will receive an email regarding any updates";

    public void sendSimpleMail(Subscribe subscribe)
    {
        LOGGER.info("Creating a simple mail message");
            SimpleMailMessage mailMessage
                    = new SimpleMailMessage();
        LOGGER.info("Setting up necessary details");
            mailMessage.setFrom(sender);
            mailMessage.setTo(subscribe.getEmail());
            mailMessage.setText(PALMLAND_BODY);
            mailMessage.setSubject(PALMLAND_SUBJECT);
            LOGGER.info("Sending the mail");
            mailSender.send(mailMessage);
        LOGGER.info("Email sent successfully !!!");

    }

    public void sendEmailWithAttachment(String to, String body, String subject) throws MailException, MessagingException {
        MimeMessage mimeMessage = mailSender.createMimeMessage();
        MimeMessageHelper helper = new MimeMessageHelper(mimeMessage, true);
            helper.setFrom(sender);
            helper.setTo(to);
            helper.setSubject("Subscribed");
            helper.setText("Congrats!! you have unsubscribed successfully");
            ClassPathResource classPathResource = new ClassPathResource("realestate.jpg");
            helper.addAttachment(classPathResource.getFilename(), classPathResource);
            mailSender.send(mimeMessage);
        LOGGER.info("Email sent successfully with attachment !!!");
    }
}