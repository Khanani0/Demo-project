import React, { useState, useContext } from "react";
import { ProjectContext } from "../Context/ProjectContext";
import { Button, DatePicker, Slider, Radio } from "antd";
import "../../App.css";
import moment from "moment";
import firebase from 'firebase';

const dateFormat = "YYYY/MM/DD";

const ProjectForm = props => {
  const { AddProject , Project } = useContext(ProjectContext);
  const [Title, setTitle] = useState("");
  const [CreatedBy, setCreatedBy] = useState("");
  const [radio, setRadio] = useState([{ value: 1 }]);

  console.log(Project)

  const HandleFormSubmit = e => {
    e.preventDefault();
    AddProject(Title, CreatedBy);
    props.history.push("/MyProjects");
  };
  const onChange = e => {
    console.log("radio checked", e.target.value);
    setRadio({
      value: e.target.value
    });
  };
  return (
    <div className="container">
      <form className="white">
        <h1>Create new Project </h1>
        <div className="input-field">
          <label htmlFor="Title">Title</label>
          <input
            type="text"
            id="Title"
            onChange={e => setTitle(e.target.value)}
            value={Title}
          />
          <br />
          <br />
          <div className="input-field">
            <label htmlFor="CreatedBy">CreatedBy</label>
            <input
              type="text"
              id="CreatedBy"
              onChange={e => setCreatedBy(e.target.value)}
              value={CreatedBy}
            />
          </div>
          <br />
          <br />
          <DatePicker
            defaultValue={moment("2019/01/01", dateFormat)}
            format={dateFormat}
          />
          <br />
          <br />
          <DatePicker
            defaultValue={moment("2019/01/01", dateFormat)}
            format={dateFormat}
          />
          <br />
          <br />
          <Slider defaultValue={50} tooltipVisible />
          <h6>*This is the expected amount of project</h6>
          <br />
          <br />
          <Radio.Group onChange={onChange} value={radio.value}>
            <Radio value={1}>Hundred</Radio>
            <Radio value={2}>Thousand</Radio>
            <Radio value={3}>Million</Radio>
            <Radio value={4}>Billion</Radio>
          </Radio.Group>
          <h6>*Unit for your expected amount selected</h6>
        </div>
        <br />
        <Button type="primary" onClick={HandleFormSubmit}>
          Load Project to your ProjectList
        </Button>
      </form>
    </div>
  );
};

export default ProjectForm;
