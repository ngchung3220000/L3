import React, { useState, useEffect } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
} from "@material-ui/core";
import RegistForm from "app/employeeManagement/components/RegistForm/RegistForm";

import { useSelector, useDispatch } from "react-redux";
import { updateFormEmployee } from "app/employeeManagement/api/EmployeeServices";
import SendLeaderDialog from "app/employeeManagement/components/RegistForm/RegistForm/SendLeaderDialog/SendLeaderDialog";
import { updateFormEmployeeRequested } from "app/employeeManagement/redux/actions/EmployeeAction";

export default function EmployeeRegistDialog(props) {
  const dispatch = useDispatch();
  const { closeRegistDialog } = props;
  const [formEmployee, setFormEmployee] = useState({});
  const [sendLeaderData, setSenLeaderData] = useState({});
  const [openSendLeaderDialog, setOpenSendLeaderDialog] = useState(false);

  const formData = useSelector((state) => state.employee.formEmployee);
  useEffect(() => {
    setFormEmployee(formData);
  }, [formData]);

  const handleFormatDate = (dateData) => {
    let date = new Date(dateData);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    const formattedDate = `${year}-${month}-${day}`;
    return formattedDate;
  };

  const handleUpdateFormEmployee = () => {
    const newArray = formEmployee.cv.workExperiences.map((element) => {
      return {
        ...element,
        startDate: handleFormatDate(element.startDate),
        endDate: handleFormatDate(element.endDate),
      };
    });
    const data = {
      resume: {
        fullName: formEmployee.resume.fullName,
        commonName: formEmployee.resume.commonName,
        currentAddress: formEmployee.resume.currentAddress,
        citizenId: formEmployee.resume.citizenId,
        citizenIdIssuanceDate: handleFormatDate(
          formEmployee.resume.citizenIdIssuanceDate
        ),
        citizenIdIssuingAuthority:
          formEmployee.resume.citizenIdIssuingAuthority,
        ethnicity: formEmployee.resume.ethnicity,
        religion: formEmployee.resume.religion,
      },
      cv: {
        careerGoal: formEmployee.cv.careerGoal,
        skill: formEmployee.cv.skill,
        hobby: formEmployee.cv.hobby,
        workExperiences: newArray,
      },
    };
    dispatch(
      updateFormEmployeeRequested({
        id: formEmployee.employeeId,
        data: data,
      })
    );
  };

  return (
    <Dialog
      open={true}
      onClose={() => closeRegistDialog()}
      aria-labelledby="form-dialog-title"
      maxWidth="lg"
      fullWidth
    >
      <DialogContent style={{ height: "800px" }}>
        <RegistForm
          formEmployee={formEmployee}
          setFormEmployee={setFormEmployee}
        />
        {openSendLeaderDialog && (
          <SendLeaderDialog
            data={sendLeaderData}
            setData={setSenLeaderData}
            formEmployee={formEmployee}
            closeSendLeaderDialog={() => setOpenSendLeaderDialog(false)}
          />
        )}
      </DialogContent>
      <DialogActions>
        <Button
          onClick={() => handleUpdateFormEmployee()}
          color="secondary"
          variant="contained"
        >
          Lưu
        </Button>
        <Button
          onClick={() => {
            setOpenSendLeaderDialog(true);
          }}
          color="primary"
          variant="contained"
        >
          Gửi lãnh đạo
        </Button>
        <Button
          onClick={() => closeRegistDialog()}
          color="error"
          variant="contained"
        >
          Hủy
        </Button>
      </DialogActions>
    </Dialog>
  );
}
