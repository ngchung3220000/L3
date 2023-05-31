import { Grid, Typography } from "@material-ui/core";
import React from "react";
import "../../../assets/scss/displayFlex.scss";

export default function SalaryIncreaseLetter() {
  return (
    <Grid container className="font-family" spacing={2}>
      <Grid item xs={12}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography align="center" variant="h5">
              CỘNG HOÀ XÃ HỘI CHỦ NGHĨA VIỆT NAM
            </Typography>
          </Grid>
          <Grid item variant="h6" xs={12}>
            <Typography align="center" variant="h6">
              Độc lập - Tự do - Hạnh phúc
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography align="center" variant="h6">
              -------------------------
            </Typography>
          </Grid>
        </Grid>
      </Grid>

      <Grid item xs={12}>
        <Typography align="right">
          Hà Nội, {`ngày ${2} tháng ${3} năm ${2222}`}
        </Typography>
      </Grid>

      <Grid item xs={12}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography align="center" variant="h6">
              QUYẾT ĐỊNH
            </Typography>
          </Grid>

          <Grid item xs={12}>
            <Typography align="center">
              Về việc tăng lương cho người lao động
            </Typography>
          </Grid>
        </Grid>
      </Grid>

      <Grid item xs={12}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography>
              - Căn cứ tại quy chế, điều lệ của công ty Chung
            </Typography>
          </Grid>

          <Grid item xs={12}>
            <Typography>
              - Căn cứ vào hợp đồng lao động với người lao động
            </Typography>
          </Grid>

          <Grid item xs={12}>
            <Typography>
              - Xét những đóng góp của người lao động và đề nghị của trưởng
              phòng nhân sự
            </Typography>
          </Grid>
        </Grid>
      </Grid>

      <Grid item xs={12}>
        <Typography style={{ paddingTop: "20px" }} align="center" variant="h6">
          QUYẾT ĐỊNH
        </Typography>
      </Grid>

      <Grid item xs={12}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography>
              - Điều 1: Kể từ ngày tháng năm , mức lương của Ông/Bà "tên" sẽ là:
              ...
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography>
              - Điều 2: Các ông/bà Phòng Nhân sự, Phòng Tài chính Kế toán và
              Ông/Bà "tên" căn cứ quyết định thi hành.
            </Typography>
          </Grid>
        </Grid>
      </Grid>

      <Grid container justifyContent="flex-end" item xs={12}>
        <Grid container xs={4}>
          <Grid item xs={12}>
            <Typography style={{ fontWeight: "600" }} align="center">
              Người làm đơn
            </Typography>
          </Grid>

          <Grid item xs={12}>
            <Typography align="center">teen</Typography>
          </Grid>

          <Grid item xs={12}>
            {" "}
            <Typography align="center">hoj va ten</Typography>
          </Grid>

          <Grid item xs={12}>
            <Typography align="center">(ký, ghi rõ họ tên)</Typography>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
