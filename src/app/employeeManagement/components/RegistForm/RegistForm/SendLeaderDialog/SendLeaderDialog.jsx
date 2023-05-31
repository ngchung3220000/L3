import React from 'react'
import {
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    Button,
    Grid,
    TextField
} from '@material-ui/core'
import { useDispatch } from 'react-redux';
import { leaderActionRequest } from 'app/employeeManagement/redux/actions/EmployeeAction';

function SendLeaderDialog(props) {
    const { data, setData, closeSendLeaderDialog, formEmployee } = props;
    const dispatch = useDispatch();

    const handleChangeInput = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value,
        })
    }

    const handleSubmit = () => {
        data.status = 3;
        dispatch(leaderActionRequest({
            id: formEmployee.employeeId,
            data: data
        }))
    }

    return (
        <Dialog open={true} onClose={closeSendLeaderDialog}>
            <DialogTitle>Trình lãnh đạo</DialogTitle>
            <DialogContent>
                <Grid container spacing={2}>
                    <Grid item container spacing={2}>
                        <Grid item xs={4}>
                            <TextField
                                type='date'
                                size='small'
                                variant='outlined'
                                label={
                                    <span className="font">
                                        <span style={{ color: "red" }}> * </span>
                                        Ngày trình
                                    </span>
                                }
                                InputLabelProps={{
                                    shrink: true
                                }}
                                name='registerDate'
                                value={data?.registerDate}
                                onChange={(e) => handleChangeInput(e)}
                            />
                        </Grid>
                        <Grid item xs={4}>
                            <TextField
                                type='text'
                                size='small'
                                variant='outlined'
                                label={
                                    <span className="font">
                                        <span style={{ color: "red" }}> * </span>
                                        Tên nhân viên
                                    </span>
                                }
                                InputLabelProps={{
                                    shrink: true
                                }}
                                name='registerName'
                                value={data?.registerName}
                                onChange={(e) => handleChangeInput(e)}
                            />
                        </Grid>
                        <Grid item xs={4}>
                            <TextField
                                type='text'
                                size='small'
                                variant='outlined'
                                label={
                                    <span className="font">
                                        <span style={{ color: "red" }}> * </span>
                                        Vị trí
                                    </span>
                                }
                                InputLabelProps={{
                                    shrink: true
                                }}
                                name='registerPosition'
                                value={data?.registerPosition}
                                onChange={(e) => handleChangeInput(e)}
                            />
                        </Grid>
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            type='text'
                            size='small'
                            variant='outlined'
                            fullWidth
                            label={
                                <span className="font">
                                    <span style={{ color: "red" }}> * </span>
                                    Nội dung
                                </span>
                            }
                            InputLabelProps={{
                                shrink: true,
                                required: true
                            }}
                            name='registerContent'
                            value={data?.registerContent}
                            onChange={(e) => handleChangeInput(e)}
                        />
                    </Grid>
                </Grid>
            </DialogContent>
            <DialogActions>
                <Button onClick={() => handleSubmit()} color="primary" variant='contained'>
                    Gửi
                </Button>
                <Button onClick={() => closeSendLeaderDialog()} color="error" variant='contained'>
                    Hủy
                </Button>
            </DialogActions>
        </Dialog>
    )
}

export default SendLeaderDialog