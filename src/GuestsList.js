import React from "react"
import 'antd/dist/antd.min.css'
import { Space } from "antd"
import { Navigate } from "react-router-dom"
import { CheckCircleTwoTone } from '@ant-design/icons';

const GuestsList = ({ state }) => {
  return (
    <div>
        {
          state.commonState.map(guest => guest.eatsPizza === false
            ? <div style={{ color: "gray" }}>{guest.name}</div>
            : guest.eatsPizza === true && guest.formInfo.feedback.length === 0
              ? <div style={{ color: "black" }} onClick={<Navigate to={`/${guest.name.split(" ").join("")}`} />}>{guest.name}</div>
              : guest.eatsPizza === true && guest.formInfo.feedback.length > 0
                ? <div style={{ color: "black" }} onClick={<Navigate to={`/${guest.name.split(" ").join("")}`} />} ><Space><CheckCircleTwoTone twoToneColor="#52c41a" /></Space>{guest.name}</div>
                : guest.eatsPizza === true && guest.formInfo.feedback.length === 0 && guest.isVegan === true
                  ? <div style={{ color: "limegreen" }} onClick={<Navigate to={`/${guest.name.split(" ").join("")}`} />}>{guest.name}</div>
                  : guest.eatsPizza === true && guest.formInfo.feedback.length > 0 && guest.isVegan === true
                    ? <div style={{ color: "limegreen" }} onClick={<Navigate to={`/${guest.name.split(" ").join("")}`} />}><Space><CheckCircleTwoTone twoToneColor="#52c41a" /></Space>{guest.name}</div>
                    : null)
        }
    </div>
  )
}

export default GuestsList