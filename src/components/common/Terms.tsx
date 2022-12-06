import React, { FunctionComponent } from 'react'
import styles from '@styles/buyCoin.module.scss'
type props = {
  terms: boolean
  onclick: () => void
}
const Terms: FunctionComponent<props> = ({ terms, onclick }): JSX.Element => {
  return (
    <section className={terms ? `${styles.terms} ${styles.active}` : `${styles.terms}`}>
      <ol className={styles.wrap}>
        <section className={styles.termsHeader}>
          <h2>가상자산 구매 약관</h2>
          <div className={styles.close} onClick={onclick}>
            <img src={`${import.meta.env.BASE_URL}images/close.svg`} alt="닫기" />
          </div>
        </section>
        <section className={styles.termsBody}>
          <ol className={styles.termsBodyWrap}>
            <h1>가상자산 구매서비스 이용약관</h1>
            <h2>제1조(목적)</h2>
            <p>
              이 약관은 (주)인스타페이(이하 “회사”라 한다)가 웹사이트(ex.instacoins.io)를 통해 제공하는 온라인 가상자산 구매 서비스(이하 “서비스”라
              한다)의 이용에 있어 회사와 이용자의 권리·의무 및 책임사항을 규정함을 목적으로 한다.
            </p>

            <h2>제2조(정의)</h2>
            <ol className={styles.sent}>
              <li>
                “서비스”란 "회사"가 디지털 가상 자산을 특정 이용자에게 개별적으로 판매하기 위하여 컴퓨터 등 정보통신설비를 이용하여 제공하는 제반
                서비스를 말한다.
              </li>
              <li>“이용자” 혹은 “구매자”란 “서비스”에 접속하여 이 약관에 따라 “회사”가 제공하는 서비스를 받는 회원 및 비회원을 말한다.</li>
              <li>
                “인스타페이 회원(이하 회원)”이라 함은 모바일 애플리케이션 “인스타페이”를 통해 “회사”에 회원등록을 한 자로서, 계속적으로 “회사”가
                제공하는 서비스를 이용할 수 있는 자를 말한다.
              </li>
              <li>
                “가상 자산”(혹은 ‘암호 자산')이란 블록체인(DLT, Distribute Ledger Technology)을 이용하여 발행된 자산(코인) 혹은 그 자산과 전환기술을
                이용하여 발행된 자산(코인 혹은 토큰이라 함)을 말한다.
              </li>
              <li>“인스타코인(INC)”이란 인스타페이가 결제수단으로 사용하기 위하여 블록체인기술을 이용하여 발행한 가상자산을 말한다. </li>
              <li>
                “시세”란 국내외 가상자산 거래소에서 거래되는 개별 가상자산과 교환되는 통화로 표시되는 액면금액을 말한다. ‘시세'는 개별 가상자산 거래소
                마다 상이하고 표시되는 통화에 따라 다를 수 있다. 환율에 따라 국내외 혹은 외국간 다를 수 있다.
              </li>
              <li>
                “결제금액"이란 서비스를 이용하여 가상자산을 구매하기 위하여 인스타페이 앱에 표기하는 금액을 말한다. 결제금액에서 제반 구매비용을
                차감한 것이 실제 구매금액이다.
              </li>
            </ol>

            <h2>제3조 (약관의 게시와 개정)</h2>
            <ol className={styles.sent}>
              <li>회사는 이 약관의 내용을 회원이 쉽게 알 수 있도록 서비스 내 화면 또는 연결화면을 통하여 게시한다.</li>
              <li>회사는 필요한 경우 관련 법령을 위배하지 않는 범위에서 이 약관을 개정할 수 있습니다.</li>
              <li>
                회사가 이 약관을 개정할 경우에는 개정내용과 적용일자를 명시하여 적용일자 15일 이전부터 적용일자 전날까지 회원에게 공지 또는 통지한다.
              </li>
              <li>
                회사가 본조 제3항에 따라 공지 또는 통지하면서 회원에게 적용일자 전날까지 의사표시를 하지 않으면 의사표시가 표명된 것으로 본다는 뜻을
                명시한 경우, 회원이 명시적으로 거부의 의사표시를 하지 아니하였다면 회원이 개정약관에 동의한 것으로 봅니다.
              </li>
              <li>회원은 개정 약관에 동의하지 않는 경우 적용 일자 전날까지 회사에 거부 의사를 표시하고 서비스 이용계약을 해지할 수 있습니다.</li>
            </ol>

            <h2>제4조(약관의 해석)</h2>
            <p>
              이 약관에서 정하지 아니한 사항과 이 약관의 해석에 관하여는 전자상거래 등에서의 소비자보호에 관한 법률, 약관의 규제 등에 관한 법률,
              공정거래위원회가 정하는 「전자상거래 등에서의 소비자 보호지침」 및 관계법령 또는 상관례에 따릅니다.
            </p>

            <h2>제5조(서비스의 제공 및 변경)</h2>
            <ol className={styles.sent}>
              <li>“회사”는 다음과 같은 업무를 수행한다.</li>
              <ol className={styles.subsent}>
                <li>재화 ,용역 및 서비스에 대한 정보 제공 및 구매계약의 체결</li>
                <li>구매계약이 체결된 재화 또는 용역의 처리</li>
                <li>구매한 가상자산을 개설된 전자지갑에 보관 및 전송</li>
                <li>회사가 회원으로부터 구매를 의뢰받은 경우 그 구매의 대행</li>
                <li>구매의 대행의 경우 국내외 가상자산 거래소 혹은 개인으로부터 구매</li>
                <li>기타 “회사”이 정하는 업무</li>
              </ol>
              <li>
                “회사”는 재화, 용역 및 서비스의 품절 또는 기술적 사양의 변경 등의 경우에 장차 체결되는 계약에 의해 제공할 재화, 용역 및 서비스의
                내용을 변경할 수 있다. 이 경우에는 변경된 재화 또는 용역의 내용 및 제공일자를 명시하여 현재의 재화 또는 용역의 내용을 게시한 곳에 즉시
                공지한다.
              </li>
            </ol>

            <h2>제6조(서비스의 이용)</h2>

            <ol className={styles.sent}>
              <li>
                회원이 구매하고자 하는 가상자산을 선택하고 구매하고자 하는 금액을 화면에 입력하면 회사는 소정의 수수료를 차감 후 해당 가상자산의
                교환비율을 적용하여 계산한 수량을 실시간으로 계산하여 화면에 표시한다. 다만, 구매 및 전송에 시간적 지체가 있을 수 있으며 이에따라
                표시된 수량과 실제 구매 수량에 차이가 있을 수 있다.
              </li>
              <li>
                회원이 본 이용약관에 동의함을 표시하고 구매 버튼을 누르면 회사는 인스타페이 앱으로 결제 가능한 QR코드(PC의 경우)나 앱 결제 화면으로
                연결되는 링크(모바일의 경우)를 제공한다. 회원이 QR코드를 스캔하거나 링크를 눌러 인스타페이 앱의 결제 화면으로 이동 후 비밀번호(PIN)을
                입력하면 구매를 위한 결제를 진행한다.
              </li>
              <li>
                결제는 사전에 실명확인과 출금동의를 거친 회원 본인의 입출금 계정(같은 금융회사에 개설된 회사의 계좌와 회원의 계좌 사이에서만 금융거래
                등을 허용하는 계정을 말한다)으로부터 1항에서 설정한 금액을 출금함으로써 완료된다.
              </li>
              <li>인스타페이 앱으로 결제를 완료한 경우 회원은 디지털 자산 매매주문을 제출한 것으로 간주한다. </li>
              <li>
                회사는 회원이 주문을 제출하기 전에 회원이 매수 또는 매도하려고 하는 디지털 자산의 수량, 가격 등을 요약한 주문확인 정보를 제공한다.
                회원은 회사가 이러한 주문확인 정보를 제공하지 못하는 경우에도 회원이 제출한 주문에는 영향을 미치지 않음에 동의한다.
              </li>
              <li>
                회원은 디지털 자산의 가격 변동에 대해서 회사가 책임지지 않는 것에 동의한다. 디지털 자산 시장의 중단 또는 제20조 제2항의 사유가 발생한
                경우 회사는 다음 중 하나 이상의 조치를 수행할 수 있으며 이러한 조치로 인해서 회원에게 발생한 손실에 대해서 회사는 고의 또는 과실이
                없는 한 책임을 지지 아니 한다.
              </li>
              <ol className={styles.sent2}>
                <li style={{ listStyle: 'none' }}>가. 서비스 중단</li>
                <li style={{ listStyle: 'none' }}>나. 구매 중단 및 반환</li>
              </ol>
              <li>
                회원이 보유한 가상 자산에 대해서 회사에 출금을 요청하면, 회사는 해당 가상 자산을 회원의 개인 지갑에 전송한다. 이때 전송 수수료 는
                회원이 부담한한다. 개인지갑의 경우 실명인증 등 ‘특정 금융거래정보의 보고 및 이용 등에 관한 법률' 소정의 규정에 따른 의무가 요구될 수
                있다.
              </li>
            </ol>

            <h2>제7조(구매계약의 철회)</h2>
            <p>
              회원이 구매한 후에는 그 구매행위의 착오로 인한 구매, 금액 오류 등 그 사유를 불문하고 실시간으로 가격이 변동되는 가상자산의 특성상
              철회되지 아니한다.
            </p>

            <h2>제8조(서비스의 중단)</h2>

            <ol className={styles.sent}>
              <li>
                “회사”는 컴퓨터 등 정보통신설비의 보수점검·교체 및 고장, 통신의 두절, 이상거래 등의 사유가 발생한 경우에는 서비스의 제공을 일시적으로
                중단할 수 있다.
              </li>
              <li>
                “회사”는 제1항의 사유로 서비스의 제공이 일시적으로 중단됨으로 인하여 "회원" 또는 제3자가 입은 손해에 대하여 배상한다. 단, “회사”가
                고의 또는 과실이 없음을 입증하는 경우에는 그러하지 아니한다.
              </li>
              <li>
                사업 종목의 전환, 사업의 포기, 업체 간의 통합 등의 이유로 서비스를 제공할 수 없게 되는 경우에는 "회사"는 제8조에 정한 방법으로
                이용자에게 통지하고 당초 “회사”에서 제시한 조건에 따라 보상한다. 다만, “회사”가 보상기준 등을 고지하지 아니한 경우에는 이용자들의
                마일리지 또는 적립금 등을 “회사”에서 통용되는 통화가치에 상응하는 현물 또는 현금으로 이용자에게 지급한다.
              </li>
            </ol>

            <h2>제9조(회원에 대한 통지)</h2>

            <ol className={styles.sent}>
              <li>“회사”는 회원에 대한 통지를 하는 경우, "회원"이 인스타페이 앱에 등록한 전자우편 주소로 할 수 있다.</li>
              <li>
                “회사”는 불특정다수 회원에 대한 통지의 경우 1주일 이상 “회사” 게시판에 게시함으로서 개별 통지에 갈음할 수 있다. 다만, 회원 본인의
                거래와 관련하여 중대한 영향을 미치는 사항에 대하여는 개별통지를 한다.
              </li>
            </ol>

            <h2>제10조(개인정보보호)</h2>
            <ol className={styles.sent}>
              <li>“회사”는 이용자의 개인정보 수집 시 서비스제공을 위하여 필요한 범위에서 최소한의 개인정보를 수집한다.</li>
              <li>
                “회사”는 회원 가입시 구매계약이행에 필요한 정보를 미리 수집하지 아니한다. 다만, 관련 법령상 의무이행을 위하여 구매계약 이전에
                본인확인이 필요한 경우로서 최소한의 특정 개인정보를 수집하는 경우에는 그러하지 아니한다.
              </li>
              <li>“회사”는 이용자의 개인정보를 수집·이용하는 때에는 당해 이용자에게 그 목적을 고지하고 동의를 받는다.</li>
              <li>
                “회사”는 수집된 개인정보를 목적 외의 용도로 이용할 수 없으며, 새로운 이용목적이 발생한 경우 또는 제3자에게 제공하는 경우에는
                이용·제공단계에서 당해 이용자에게 그 목적을 고지하고 동의를 받는다. 다만, 관련 법령에 달리 정함이 있는 경우에는 예외로 한다.
              </li>
              <li>
                “회사”는 제3항과 제4항에 의해 이용자의 동의를 받아야 하는 경우에는 개인정보보호 책임자의 신원(소속, 성명 및 전화번호, 기타 연락처),
                정보의 수집목적 및 이용목적, 제3자에 대한 정보제공 관련사항(제공받은자, 제공목적 및 제공할 정보의 내용) 등 「정보통신망 이용촉진 및
                정보보호 등에 관한 법률」 제22조제2항이 규정한 사항을 미리 명시하거나 고지해야 하며 이용자는 언제든지 이 동의를 철회할 수 있다.
              </li>
              <li>
                "회원"은 언제든지 “회사”가 가지고 있는 자신의 개인정보에 대해 열람 및 오류정정을 요구할 수 있으며 "회사"는 이에 대해 지체 없이 필요한
                조치를 취할 의무를 진다. 이용자가 오류의 정정을 요구한 경우에는 “회사”는 그 오류를 정정할 때까지 당해 개인정보를 이용하지 아니한다.
              </li>
              <li>
                “회사”는 개인정보 보호를 위하여 이용자의 개인정보를 처리하는 자를 최소한으로 제한하여야 하며 은행계좌 등을 포함한 이용자의 개인정보의
                분실, 도난, 유출, 동의 없는 제3자 제공, 변조 등으로 인한 이용자의 손해에 대하여 모든 책임을 진다.
              </li>
              <li>
                “회사” 또는 그로부터 개인정보를 제공받은 제3자는 개인정보의 수집목적 또는 제공받은 목적을 달성한 때에는 당해 개인정보를 지체 없이
                파기한다.
              </li>
              <li>
                “회사”는 개인정보의 수집·이용·제공에 관한 동의란을 미리 선택한 것으로 설정해두지 아니한다. 또한 개인정보의 수집·이용·제공에 관한
                이용자의 동의 거절시 제한되는 서비스를 구체적으로 명시하고, 필수수집항목이 아닌 개인정보의 수집·이용·제공에 관한 이용자의 동의 거절을
                이유로 회원가입 등 서비스 제공을 제한하거나 거절하지 아니한다.
              </li>
            </ol>

            <h2>제11조(“회사”의 의무)</h2>
            <ol className={styles.sent}>
              <li>
                “회사”는 법령과 이 약관이 금지하거나 공서양속에 반하는 행위를 하지 않으며 이 약관이 정하는 바에 따라 지속적이고, 안정적으로
                재화·용역을 제공하는데 최선을 다하여야 한다.
              </li>
              <li>
                “회사”는 이용자가 안전하게 인터넷 서비스를 이용할 수 있도록 이용자의 개인정보(신용정보 포함)보호를 위한 보안 시스템을 갖추어야 한다.
              </li>
              <li>
                “회사”는 상품이나 용역에 대하여 「표시·광고의 공정화에 관한 법률」 제3조 소정의 부당한 표시·광고행위를 함으로써 이용자가 손해를 입은
                때에는 이를 배상할 책임을 진다.
              </li>
              <li>“회사”는 이용자가 원하지 않는 영리목적의 광고성 전자우편을 발송하지 아니한다.</li>
            </ol>

            <h2>제12조(이용자의 의무)</h2>
            <p>이용자는 다음 행위를 하여서는 안 됩니다.</p>

            <ol className={styles.sent2}>
              <li>a. 신청 또는 변경시 허위 내용의 등록</li>
              <li>b. 타인의 정보 도용</li>
              <li>c. “회사”에 게시된 정보의 변경</li>
              <li>d. “회사”이 정한 정보 이외의 정보(컴퓨터 프로그램 등) 등의 송신 또는 게시</li>
              <li>e. “회사” 기타 제3자의 저작권 등 지적재산권에 대한 침해</li>
              <li>f. “회사” 기타 제3자의 명예를 손상시키거나 업무를 방해하는 행위</li>
              <li>g. 외설 또는 폭력적인 메시지, 화상, 음성, 기타 공서양속에 반하는 정보를 "서비스"에 공개 또는 게시하는 행위</li>
            </ol>

            <h2>제13조(분쟁해결)</h2>
            <ol className={styles.sent}>
              <li>“회사”는 이용자가 제기하는 정당한 의견이나 불만을 반영하고 그 피해를 보상처리하기 위하여 피해보상처리기구를 설치·운영한다.</li>
              <li>
                “회사”는 이용자로부터 제출되는 불만사항 및 의견은 우선적으로 그 사항을 처리한다. 다만, 신속한 처리가 곤란한 경우에는 이용자에게 그
                사유와 처리일정을 즉시 통보한다.
              </li>
              <li>
                “회사”와 이용자 간에 발생한 전자상거래 분쟁과 관련하여 이용자의 피해구제신청이 있는 경우에는 공정거래위원회 또는 시·도지사가 의뢰하는
                분쟁조정기관의 조정에 따를 수 있다.
              </li>
            </ol>

            <h2>제14조(재판권 및 준거법)</h2>
            <ol className={styles.sent}>
              <li>
                “회사”와 이용자 간에 발생한 전자상거래 분쟁에 관한 소송은 제소 당시의 이용자의 주소에 의하고, 주소가 없는 경우에는 거소를 관할하는
                지방법원의 전속관할로 한다. 다만, 제소 당시 이용자의 주소 또는 거소가 분명하지 않거나 외국 거주자의 경우에는 민사소송법상의 관할법원에
                제기한다.
              </li>
              <li>“회사”와 이용자 간에 제기된 전자상거래 소송에는 한국법을 적용한다.</li>
            </ol>
          </ol>
        </section>
      </ol>
    </section>
  )
}

export default Terms
