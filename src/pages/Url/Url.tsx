import { useState } from "react";
import classes from "./url.module.css";
import { useSearchParams } from "react-router-dom";

const Url = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const [query, setQuery] = useState({
    label: "",
    name: "",
    others: "",
  });

  const [url, setUrl] = useState("");

  const handleChange = (e: { target: { name: any; value: any } }) => {
    setQuery({ ...query, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    let str = "";

    Object.entries(query).forEach((arr) => {
      if (arr[1]) {
        if (str) {
          str = str + `&${arr[0]}=${arr[1]}`;
        } else {
          str = str + `${arr[0]}=${arr[1]}`;
        }
      }
    });
    setUrl(str);
    console.log(str);

    // if (history.pushState) {
    //   // var newurl = window.location.protocol + "//" + window.location.host + window.location.pathname + '?myNewUrlQuery=1';
    //   window.history.pushState({ path: newurl }, "", newurl);
    // }

    setSearchParams(str);
  };

  return (
    <div className={classes.root}>
      <div className={classes.form}>
        <p className={classes.url}>{searchParams}</p>
        <p className={classes.url}>{url}</p>
        <div className={classes.formGroup}>
          <label className={classes.label} htmlFor="label">
            Label
          </label>
          <input
            className={classes.input}
            type="text"
            name="label"
            id="label"
            value={query.label}
            onChange={handleChange}
          />
        </div>
        <div className={classes.formGroup}>
          <label className={classes.label} htmlFor="name">
            name
          </label>
          <input
            className={classes.input}
            type="text"
            name="name"
            id="name"
            value={query.name}
            onChange={handleChange}
          />
        </div>
        <div className={classes.formGroup}>
          <label className={classes.label} htmlFor="others">
            others
          </label>
          <input
            className={classes.input}
            type="text"
            name="others"
            id="others"
            value={query.others}
            onChange={handleChange}
          />
        </div>
        <div>
          <button onClick={handleSubmit} className={classes.button}>
            Done
          </button>
        </div>
      </div>
    </div>
  );
};

export default Url;
