import React from "react";
import {
  Grid,
  Avatar,
  TextField,
  Typography,
  styled,
  IconButton,
  Icon,
} from "@material-ui/core";
import MailIcon from "@material-ui/icons/Mail";
import PersonIcon from "@material-ui/icons/Person";
import PhoneIcon from "@material-ui/icons/Phone";
import RoomIcon from "@material-ui/icons/Room";
import DateRangeIcon from "@material-ui/icons/DateRange";
import "./Profile.css";
import moment from "moment";
import {
  APPROVED_STATUS,
  PENDING_STATUS,
} from "app/employeeManagement/constants/constants";

const MyTitle = styled(Typography)({
  color: "inherit",
  fontSize: "1.5em",
  marginBottom: "0.5em",
});

function Profile(props) {
  const { formEmployee, setFormEmployee, employee } = props.props;

  const handleIncrementWorkExperiences = () => {
    let newArray = [
      ...formEmployee?.cv?.workExperiences,
      {
        company: null,
        position: null,
        details: null,
        startDate: null,
        endDate: null,
      },
    ];
    setFormEmployee({
      ...formEmployee,
      cv: {
        ...formEmployee.cv,
        workExperiences: newArray,
      },
    });
  };

  const handleDecrementWorkExperiences = (index) => {
    formEmployee.cv.workExperiences.splice(index, 1);
    setFormEmployee({
      ...formEmployee,
      cv: {
        ...formEmployee.cv,
        workExperiences: formEmployee?.cv.workExperiences,
      },
    });
  };

  const handleChangeInput = (e, index) => {
    if (typeof index === "number") {
      let newArray = formEmployee?.cv.workExperiences;
      newArray[index][e.target.name] = e.target.value;
      setFormEmployee({
        ...formEmployee,
        cv: {
          ...formEmployee.cv,
          workExperiences: newArray,
        },
      });
    } else {
      setFormEmployee({
        ...formEmployee,
        cv: {
          ...formEmployee.cv,
          [e.target.name]: e.target.value,
        },
      });
    }
  };

  const handleFormatDate = (dateData) => {
    let date = new Date(dateData);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");

    const formattedDate = `${year}-${month}-${day}`;
    return formattedDate;
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
      xs={12}
      spacing={3}
      justifyContent="space-between"
    >
      <Grid
        item
        container
        xs={4}
        direction="column"
        style={{ backgroundColor: "#2b324c", color: "#fff" }}
        spacing={3}
      >
        <Grid item container justifyContent="center">
          <Avatar
            src={formEmployee?.resume?.photoUrl || ""}
            style={{
              width: "200px",
              height: "200px",
              objectFit: "cover",
              marginBottom: "20px",
            }}
          />
        </Grid>

        <Grid item>
          <MyTitle>THÔNG TIN CÁ NHÂN</MyTitle>
          <Grid container spacing={2}>
            <Grid item container justifyContent="flex-end">
              <Grid item xs={2}>
                {" "}
                <PersonIcon />{" "}
              </Grid>
              <Grid item xs={9}>
                {formEmployee?.resume?.fullName}
              </Grid>
            </Grid>
            <Grid item container justifyContent="flex-end">
              <Grid item xs={2}>
                {" "}
                <DateRangeIcon />{" "}
              </Grid>
              <Grid item xs={9}>
                {handleFormatDate(formEmployee?.resume?.dateOfBirth)}
              </Grid>
            </Grid>
            <Grid item container justifyContent="flex-end">
              <Grid item xs={2}>
                {" "}
                <MailIcon />{" "}
              </Grid>
              <Grid item xs={9}>
                {formEmployee?.resume?.email}
              </Grid>
            </Grid>
            <Grid item container justifyContent="flex-end">
              <Grid item xs={2}>
                {" "}
                <PhoneIcon />{" "}
              </Grid>
              <Grid item xs={9}>
                {formEmployee?.resume?.phone}
              </Grid>
            </Grid>
            <Grid item container justifyContent="flex-end">
              <Grid item xs={2}>
                {" "}
                <RoomIcon />{" "}
              </Grid>
              <Grid item xs={9}>
                {formEmployee?.resume?.address}
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        <Grid item container>
          <MyTitle>KỸ NĂNG</MyTitle>

          <TextField
            className="darkTextField"
            fullWidth
            multiline
            value={formEmployee?.cv?.skill || ""}
            name="skill"
            onChange={(e) => handleChangeInput(e)}
          />
        </Grid>

        <Grid item container>
          <MyTitle>SỞ THÍCH</MyTitle>

          <TextField
            className="darkTextField"
            fullWidth
            multiline
            value={formEmployee?.cv?.hobby || ""}
            name="hobby"
            onChange={(e) => handleChangeInput(e)}
          />
        </Grid>
      </Grid>
      <Grid item container xs={8} spacing={4} direction="column">
        <Grid item>
          <MyTitle>MỤC TIÊU</MyTitle>
          <TextField
            fullWidth
            multiline
            value={formEmployee?.cv?.careerGoal || ""}
            name="careerGoal"
            onChange={(e) => handleChangeInput(e)}
          />
        </Grid>
        <Grid item container direction="column">
          <MyTitle>KINH NGHIỆM LÀM VIỆC</MyTitle>
          {formEmployee?.cv?.workExperiences.map((element, index) => {
            return (
              <Grid
                key={index}
                item
                container
                style={{
                  border: "1px dashed #ccc",
                  padding: "10px",
                  margin: "10px 0",
                  position: "relative",
                }}
              >
                <IconButton
                  style={{
                    position: "absolute",
                    bottom: "-0.6em",
                    right: "-1.6em",
                  }}
                  onClick={() => handleDecrementWorkExperiences(index)}
                >
                  <Icon color="error">remove_circle</Icon>
                </IconButton>
                <Grid item container spacing={3} justifyContent="flex-end">
                  <Grid item>
                    <label>Từ: &nbsp;</label>
                    <TextField
                      type="date"
                      variant="standard"
                      size="small"
                      name="startDate"
                      value={moment(element?.startDate).format("YYYY-MM-DD")}
                      onChange={(e) => handleChangeInput(e, index)}
                    />
                  </Grid>
                  <Grid item>
                    <label>Đến: &nbsp;</label>
                    <TextField
                      type="date"
                      variant="standard"
                      size="small"
                      name="endDate"
                      value={moment(element?.endDate).format("YYYY-MM-DD")}
                      onChange={(e) => handleChangeInput(e, index)}
                    />
                  </Grid>
                </Grid>
                <Grid item container direction="column" spacing={2}>
                  <Grid item>
                    <label>Công ty: </label>
                    <TextField
                      fullWidth
                      multiline
                      size="small"
                      value={element?.company || ""}
                      name="company"
                      onChange={(e) => handleChangeInput(e, index)}
                    />
                  </Grid>
                  <Grid item>
                    <label>Vị trí công việc: </label>
                    <TextField
                      fullWidth
                      multiline
                      size="small"
                      value={element?.position || ""}
                      name="position"
                      onChange={(e) => handleChangeInput(e, index)}
                    />
                  </Grid>
                  <Grid item>
                    <label>Chi tiết: </label>
                    <TextField
                      fullWidth
                      multiline
                      size="small"
                      type="text"
                      value={element?.details || ""}
                      name="details"
                      onChange={(e) => handleChangeInput(e, index)}
                    />
                  </Grid>
                </Grid>
              </Grid>
            );
          })}
          <IconButton onClick={() => handleIncrementWorkExperiences()}>
            <Icon>add</Icon>
          </IconButton>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Profile;
