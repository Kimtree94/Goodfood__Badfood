package com.Goodfood_Badfood.domain.Dto;

import lombok.*;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@ToString
@Builder
public class pointDto {
   private int pno; // 포인트 순서
   private String content; // 후기

}
