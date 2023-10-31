package com.kaankarakas.City.common.response;

public record MessageResponse(
        String message,
        MessageType messageType
) {
}
