import React from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";

import Find_idpw from "../Find_idpw";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      // margin: theme.spacing(1),
      width: "100%",
      display: "flex",
    },
  },
  input: {
    justifyContent: "center",
  },
}));

function Input_text() {
  const classes = useStyles();
  return (
    <form className={classes.root} noValidate autoComplete="off">
      <TextField className={classes.input} id="standard-basic" label="이메일" />
      <TextField
        className={classes.input}
        id="standard-basic"
        label="비밀번호"
      />
      <Link to="/find">
        <button>아이디 / 비밀번호 찾기</button>
      </Link>
    </form>
  );
}


export default Input_text;
