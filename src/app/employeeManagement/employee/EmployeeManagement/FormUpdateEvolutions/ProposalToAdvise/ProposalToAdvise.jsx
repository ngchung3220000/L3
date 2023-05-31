import React, { useState } from "react";
import { Button, Grid, Icon, IconButton } from "@material-ui/core";
import {
  KeyboardDatePicker,
  MuiPickersUtilsProvider,
} from "@material-ui/pickers";
import MaterialTable from "material-table";
import { TextValidator } from "react-material-ui-form-validator";
import DateFnsUtils from "@date-io/date-fns";
import ProposalToAdviseDialog from "./ProposalToAdviseDialog";

export default function ProposalToAdvise() {
  const [dialogShowLetter, setDialogShowLetter] = useState();
  const handleOnChangeValue = () => {};

  const handleDateChange = () => {};

  const handleSubmit = () => {
    setDialogShowLetter(true);
  };

  const columns = [
    {
      title: "Thao tác",
      field: "action",
      render: (rowData) => {
        return (
          <div className="none_wrap">
            <IconButton size="small" onClick={() => {}}>
              <Icon color="primary">edit</Icon>
            </IconButton>

            <IconButton size="small" onClick={() => {}}>
              <Icon color="error">delete</Icon>
            </IconButton>
          </div>
        );
      },
      width: "10%",
    },
    { title: "Loại", field: "type" },
    { title: "Ngày diễn biến", field: "date" },
    { title: "Nội dung", field: "content" },
    { title: "Ghi chú", field: "note" },
  ];

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
              <KeyboardDatePicker
                inputVariant="outlined"
                className="w-100"
                size="small"
                disableToolbar
                format="dd/MM/yyyy"
                label="Ngày diễn biến"
                name="date"
                value={null}
                onChange={(e) => handleDateChange(e)}
              />
            </MuiPickersUtilsProvider>
          </Grid>

          <Grid item xs={6}>
            <TextValidator
              variant="outlined"
              className="w-100"
              label={
                <span className="font">
                  <span style={{ color: "red" }}> * </span>
                  Loại
                </span>
              }
              type="text"
              value={""}
              name="type"
              size="small"
              validators={["required", "matchRegexp:^(?! )[^]+(?<! )$"]}
              errorMessages={[
                "Đừng để trống nhé",
                "Đừng để dấu cách ở đầu và cuối dòng nhé",
              ]}
              onChange={handleOnChangeValue}
            />
          </Grid>

          <Grid item xs={6}>
            <TextValidator
              variant="outlined"
              className="w-100"
              label={
                <span className="font">
                  <span style={{ color: "red" }}> * </span>
                  Nội dung
                </span>
              }
              type="text"
              value={""}
              name="content"
              size="small"
              validators={["required", "matchRegexp:^(?! )[^]+(?<! )$"]}
              errorMessages={[
                "Đừng để trống nhé",
                "Đừng để dấu cách ở đầu và cuối dòng nhé",
              ]}
              onChange={handleOnChangeValue}
            />
          </Grid>

          <Grid item xs={6}>
            <TextValidator
              variant="outlined"
              className="w-100"
              label={
                <span className="font">
                  <span style={{ color: "red" }}> * </span>
                  Ghi chú
                </span>
              }
              type="text"
              value={""}
              name="note"
              size="small"
              validators={["required", "matchRegexp:^(?! )[^]+(?<! )$"]}
              errorMessages={[
                "Đừng để trống nhé",
                "Đừng để dấu cách ở đầu và cuối dòng nhé",
              ]}
              onChange={handleOnChangeValue}
            />
          </Grid>
        </Grid>
      </Grid>

      <Grid
        item
        xs={12}
        style={{ display: "flex", justifyContent: "flex-end" }}
      >
        <Button variant="contained" color="primary" onClick={handleSubmit}>
          Lưu
        </Button>
      </Grid>

      <Grid item xs={12}>
        <MaterialTable
          data={[]}
          columns={columns}
          options={{
            paging: false,
            search: false,
            maxBodyHeight: 300,
            minBodyHeight: 300,
            toolbar: false,
            headerStyle: {
              backgroundColor: "#358600",
              color: "#FFF",
              paddingRight: "0px",
            },
          }}
        />
      </Grid>

      {dialogShowLetter && (
        <ProposalToAdviseDialog
          dialogShowLetter={dialogShowLetter}
          setDialogShowLetter={setDialogShowLetter}
        />
      )}
    </Grid>
  );
}
