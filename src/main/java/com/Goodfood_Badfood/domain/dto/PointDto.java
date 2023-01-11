package com.Goodfood_Badfood.domain.dto;

import com.Goodfood_Badfood.domain.entity.PointEntity;
import lombok.*;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@ToString
@Builder
public class PointDto {
   private int pno;
   private String reviewContents; // 후기
   private String pname; //닉네임
   private int point;// 포인트
   private String stname; // 가게이름

   public PointEntity toEntity(){
      return PointEntity.builder()
              .pno(this.pno)
              .reviewContents(this.reviewContents)
              .pname(this.pname)
              .point(this.point)
              .stname(this.stname)
              .build();
   }
}
