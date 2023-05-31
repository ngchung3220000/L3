import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import SalaryIncrease from "../FormUpdateEvolutions/SalaryIncrease/SalaryIncrease";
import { Grid } from "@material-ui/core";
import Promote from "../FormUpdateEvolutions/Promote/Promote";
import ProposalToAdvise from "../FormUpdateEvolutions/ProposalToAdvise/ProposalToAdvise";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: "33.33%",
    flexShrink: 0,
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
  accordion: {
    backgroundColor: "#2B324C",
    color: "#fff",
  },
}));

export default function CollapseUpdateEvolutions() {
  const classes = useStyles();
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const handleClose = () => {
    setExpanded(false);
  };

  return (
    <div className={classes.root}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Accordion
            expanded={expanded === "panel1"}
            onChange={handleChange("panel1")}
          >
            <AccordionSummary
              className={classes.accordion}
              expandIcon={<ExpandMoreIcon style={{ color: "white" }} />}
              aria-controls="panel1bh-content"
              id="panel1bh-header"
            >
              <Typography className={classes.heading}>Tăng lương</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography component={"div"}>
                <SalaryIncrease handleClose={handleClose} />
              </Typography>
            </AccordionDetails>
          </Accordion>
        </Grid>

        <Grid item xs={12}>
          <Accordion
            expanded={expanded === "panel2"}
            onChange={handleChange("panel2")}
          >
            <AccordionSummary
              className={classes.accordion}
              expandIcon={<ExpandMoreIcon style={{ color: "white" }} />}
              aria-controls="panel2bh-content"
              id="panel2bh-header"
            >
              <Typography className={classes.heading}>Thăng chức</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography component={"div"}>
                <Promote handleClose={handleClose} />
              </Typography>
            </AccordionDetails>
          </Accordion>
        </Grid>

        <Grid item xs={12}>
          <Accordion
            expanded={expanded === "panel3"}
            onChange={handleChange("panel3")}
          >
            <AccordionSummary
              className={classes.accordion}
              expandIcon={<ExpandMoreIcon style={{ color: "white" }} />}
              aria-controls="panel3bh-content"
              id="panel3bh-header"
            >
              <Typography className={classes.heading}>
                Đề xuất tham mưu
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography component={"div"}>
                <ProposalToAdvise handleClose={handleClose} />
              </Typography>
            </AccordionDetails>
          </Accordion>
        </Grid>
      </Grid>
    </div>
  );
}
