import React from "react";
import {
  Grid,
  Typography,
  Input,
  InputAdornment,
  Avatar,
  Table,
  TableContainer,
  Paper,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import moment from "moment";
import { useSelector } from "react-redux";
import {
  APPROVED_STATUS,
  PENDING_STATUS,
} from "app/employeeManagement/constants/constants";

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
  head: {
    border: "1px solid #000",
    fontWeight: "bold",
  },
  cell: {
    border: "1px solid #000",
    fontWeight: "lighter !important",
  },
});

function Resume(props) {
  const { formEmployee, setFormEmployee, employee } = props.props;
  const classes = useStyles();

  console.log(employee);

  const employeeInfo = useSelector((state) => state.employee.employee);

  const handleChangeInput = (e) => {
    setFormEmployee({
      ...formEmployee,
      resume: {
        ...formEmployee.resume,
        [e.target.name]: e.target.value,
      },
    });
  };
  return (
    <Grid
      style={{
        pointerEvents:
          employee.employeeInfo.status === PENDING_STATUS || APPROVED_STATUS
            ? "none"
            : "",
      }}
      container
      spacing={2}
    >
      <Grid item container direction="column" alignItems="center">
        <Grid item>
          <Typography variant="h5">
            CỘNG HÒA XÃ HỘI CHỦ NGHĨA VIỆT NAM
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant="h6">Độc lập - Tự do - Hạnh phúc </Typography>
        </Grid>
        <Grid item>
          <Typography>-------------------------------------</Typography>
        </Grid>
      </Grid>
      <Grid item container spacing={14} padding={4} alignItems={"center"}>
        <Grid item xs={5} textAlign="center">
          <Avatar
            src={formEmployee?.resume.photoUrl}
            style={{
              width: "200px",
              height: "200px",
              objectFit: "cover",
              marginBottom: "20px",
            }}
          />
        </Grid>
        <Grid item xs={7} textAlign="center">
          <Typography variant="h5" textAlign="center">
            SƠ YẾU LÝ LỊCH
          </Typography>
        </Grid>
      </Grid>
      <Grid item container spacing={4}>
        <Grid container item xs={12} spacing={2}>
          <Grid item xs={12}>
            <Typography variant="h5" paddingBottom={1}>
              I. BẢN THÂN
            </Typography>
          </Grid>
          <Grid item container xs={12}>
            <Grid item xs={8}>
              <Input
                id="standard-adornment-amount"
                fullWidth
                startAdornment={
                  <InputAdornment position="start">
                    1. Họ và tên:
                  </InputAdornment>
                }
                name="fullName"
                value={formEmployee?.resume.fullName}
                onChange={(e) => handleChangeInput(e)}
              />
            </Grid>
            <Grid item xs={4}>
              <Input
                readOnly={true}
                startAdornment={
                  <InputAdornment position="start">Giới tính:</InputAdornment>
                }
                fullWidth
                variant="standard"
                name="gender"
                value={formEmployee?.resume.gender === 0 ? "Nam" : "Nữ"}
              />
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Input
              readOnly={true}
              type="text"
              id="standard-adornment-amount"
              fullWidth
              startAdornment={
                <InputAdornment position="start">2. Sinh ngày:</InputAdornment>
              }
              name="dateOfBirth"
              value={new Date(
                (formEmployee?.resume.dateOfBirth).toString()
              ).toLocaleDateString()}
            />
          </Grid>
          <Grid item xs={12}>
            <Input
              id="standard-adornment-amount"
              fullWidth
              startAdornment={
                <InputAdornment position="start">
                  3. Nơi ở hiện nay:
                </InputAdornment>
              }
              name="currentAddress"
              value={formEmployee?.resume.currentAddress}
              onChange={(e) => handleChangeInput(e)}
            />
          </Grid>
          <Grid item container xs={12}>
            <Grid item xs={6}>
              <Input
                readOnly={true}
                id="standard-adornment-amount"
                fullWidth
                startAdornment={
                  <InputAdornment position="start">
                    4. Điện thoại:
                  </InputAdornment>
                }
                name="phone"
                value={formEmployee?.resume.phone || 123}
              />
            </Grid>
            <Grid item xs={6}>
              <Input
                readOnly={true}
                id="standard-adornment-amount"
                fullWidth
                startAdornment={
                  <InputAdornment position="start">Email:</InputAdornment>
                }
                name="email"
                value={formEmployee?.resume.email}
              />
            </Grid>
          </Grid>
          <Grid item container xs={12}>
            <Grid item xs={6}>
              <Input
                id="standard-adornment-amount"
                fullWidth
                startAdornment={
                  <InputAdornment position="start">5. Dân tộc:</InputAdornment>
                }
                name="ethnicity"
                value={formEmployee?.resume.ethnicity}
                onChange={(e) => handleChangeInput(e)}
              />
            </Grid>
            <Grid item xs={6}>
              <Input
                id="standard-adornment-amount"
                fullWidth
                startAdornment={
                  <InputAdornment position="start">Tôn giáo:</InputAdornment>
                }
                name="religion"
                value={formEmployee?.resume.religion}
                onChange={(e) => handleChangeInput(e)}
              />
            </Grid>
          </Grid>
          <Grid item container xs={12}>
            <Grid item xs={6}>
              <Input
                id="standard-adornment-amount"
                fullWidth
                startAdornment={
                  <InputAdornment position="start">6. Số CCCD:</InputAdornment>
                }
                name="citizenId"
                value={formEmployee?.resume.citizenId}
                onChange={(e) => handleChangeInput(e)}
              />
            </Grid>
            <Grid item xs={6}>
              <Input
                type="date"
                id="standard-adornment-amount"
                fullWidth
                startAdornment={
                  <InputAdornment position="start">Cấp ngày:</InputAdornment>
                }
                name="citizenIdIssuanceDate"
                value={moment(
                  formEmployee?.resume.citizenIdIssuanceDate
                ).format("YYYY-MM-DD")}
                onChange={(e) => handleChangeInput(e)}
              />
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Input
              startAdornment={
                <InputAdornment position="start">Nơi cấp:</InputAdornment>
              }
              fullWidth
              variant="standard"
              name="citizenIdIssuingAuthority"
              value={formEmployee?.resume.citizenIdIssuingAuthority}
              onChange={(e) => handleChangeInput(e)}
            />
          </Grid>
        </Grid>

        <Grid item xs={12} container spacing={2}>
          <Grid item xs={12}>
            <Typography variant="h5" paddingBottom={2}>
              II. QUAN HỆ GIA ĐÌNH
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <TableContainer component={Paper}>
              <Table className={classes.table}>
                <TableHead>
                  <TableRow>
                    <TableCell className={classes.head} align="center">
                      Quan hệ
                    </TableCell>
                    <TableCell className={classes.head} align="center">
                      Họ và tên
                    </TableCell>
                    <TableCell className={classes.head} align="center">
                      Năm sinh
                    </TableCell>
                    <TableCell className={classes.head} align="center">
                      Căn cước công dân
                    </TableCell>
                    <TableCell className={classes.head} align="center">
                      Địa chỉ
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {employeeInfo?.familyRelations.map((row) => (
                    <TableRow key={row.name}>
                      <TableCell className={classes.cell} align="center">
                        {row.relation}
                      </TableCell>
                      <TableCell className={classes.cell} align="center">
                        {row.name}
                      </TableCell>
                      <TableCell className={classes.cell} align="center">
                        {new Date(row.dateOfBirth).getFullYear()}
                      </TableCell>
                      <TableCell className={classes.cell} align="center">
                        {row.citizenId}
                      </TableCell>
                      <TableCell className={classes.cell} align="center">
                        {row.address}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Resume;
