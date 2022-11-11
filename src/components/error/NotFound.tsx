import type { FunctionComponent } from "react";
import React from "react";
import styles from "@styles/common/error.module.scss";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";
const ButtonCustom = styled(Button)({
  fontSize: 15,
});

const NotFound: FunctionComponent = (): JSX.Element => {
  const navigate = useNavigate();
  return (
    <div className={styles.container404}>
      <div>
        <div>404 Not Found</div>
        <div className={styles.message}>페이지를 찾을수 없습니다.</div>
        <div className={styles.mt10}>
          <ButtonCustom
            variant="contained"
            onClick={() => {
              navigate("/");
            }}
          >
            홈으로
          </ButtonCustom>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
