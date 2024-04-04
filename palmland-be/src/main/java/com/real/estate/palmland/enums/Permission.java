package com.real.estate.palmland.enums;

import lombok.Getter;
import lombok.RequiredArgsConstructor;


@RequiredArgsConstructor
public enum Permission {

    ADMIN_READ("admin:read"),
    ADMIN_UPDATE("admin:update"),
    ADMIN_CREATE("admin:create"),
    ADMIN_DELETE("admin:delete"),
    DEALER_READ("management:read"),
    DEALER_UPDATE("management:update"),
    DEALER_CREATE("management:create"),
    DEALER_DELETE("management:delete"),

    CUSTOMER_READ("customer:read"),
    CUSTOMER_UPDATE("customer:update"),
    CUSTOMER_CREATE("customer:create"),
    CUSTOMER_DELETE("customer:delete")
    ;

    @Getter
    private final String permission;
}
