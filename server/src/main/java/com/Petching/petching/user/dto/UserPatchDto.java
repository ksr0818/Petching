package com.Petching.petching.user.dto;

import lombok.*;

import javax.validation.constraints.Email;
import javax.validation.constraints.Positive;

@Getter
@AllArgsConstructor @Setter
public class UserPatchDto {
    @Positive
    private long userId;

    @Email
    private String email;

    private String password;

    private String nickName;

    private String address;

    private String profileImgUrl;

    public UserPatchDto(){

    }

}

