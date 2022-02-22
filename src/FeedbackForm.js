import React, { useRef } from "react";
import { Rate } from "antd"
import { useFormik } from "formik";
import { getFormInfo } from "./redux/appReducer";
import { useParams } from "react-router-dom";

const FeedbackForm = (props) => {

  const {userId: urlName} = useParams() 

  const phoneRef = useRef()
  const feedbackTextRef = useRef()
  const starRatingRef = useRef()

  const formik = useFormik({
    initialValues: {
      phone: "",
      feedback: "",
      rating: 0
    },
    onSubmit: values => getFormInfo(JSON.stringify(values, null, 2))
  })

  let buttonInnerText = ""

  if (phoneRef.current.value.length !== 0 && feedbackTextRef.current.value.length && starRatingRef.current.count !== 0) {
    buttonInnerText = "SAVE"
  } else {
    buttonInnerText = "CANCEL"
  }
  //address fix at render (need to join name)
  return (
    <>
      {
        Object.keys(props.state.commonState.find(guest => guest.name === urlName ).formInfo).length > 0
        ?
        <div>
          <div>
            <p>phone</p><span>delete</span>
          </div>
          <Rate count={props.state.commonState.find(guest => guest.name === urlName).rating}/>
        </div>
        :
        <form onSubmit={formik.handleSubmit}>
          <label>Name</label>
          <p>{"username"}</p>
          <Rate ref={starRatingRef} id="rating" name="rating" onChange={formik.handleChange} value={formik.values.rating}/>
          <label>phone</label>
          <input ref={phoneRef} onChange={formik.handleChange} value={formik.values.phone} id="phone" name="phone" />
          <label>phone</label>
          <textarea ref={feedbackTextRef} onChange={formik.handleChange} value={formik.values.feedback} id="feedback" name="feedback" placeholder="your feedback" />
          <button type="submit">{buttonInnerText}</button>
        </form>
      }
    </>

  )
}

export default FeedbackForm