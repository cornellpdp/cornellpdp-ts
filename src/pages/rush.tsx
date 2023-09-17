import { GetStaticProps } from "next"
import Background from "@/components/Background"
import RushGraphic from "@/components/RushGraphic"
import rush from "public/img/rush.jpg"
import fa23front from "public/img/rush/fa23front.jpg"
import fa23back from "public/img/rush/fa23back.jpg"
import sp23front from "public/img/rush/sp23front.jpg"
import sp23back from "public/img/rush/sp23back.jpg"
import fa22front from "public/img/rush/fa22front.jpg"
import fa22back from "public/img/rush/fa22back.jpg"
import sp22front from "public/img/rush/sp22front.jpg"
import sp22back from "public/img/rush/sp22back.jpg"
import fa21front from "public/img/rush/fa21front.jpg"
import fa21back from "public/img/rush/fa21back.jpg"
import sp21front from "public/img/rush/sp21front.jpg"
import sp21back from "public/img/rush/sp21back.jpg"
import sp20front from "public/img/rush/sp20front.jpg"
import sp20back from "public/img/rush/sp20back.jpg"
import fa19front from "public/img/rush/fa19front.jpg"
import fa19back from "public/img/rush/fa19back.jpg"
import sp19front from "public/img/rush/sp19front.png"
import sp19back from "public/img/rush/sp19back.png"
import fa18front from "public/img/rush/fa18front.png"
import fa18back from "public/img/rush/fa18back.png"
import sp18front from "public/img/rush/sp18front.jpg"
import sp18back from "public/img/rush/sp18back.jpg"
import fa17front from "public/img/rush/fa17front.png"
import fa17back from "public/img/rush/fa17back.png"

type RushProps = {
  title: string
}

export default function Page() {
  return (
    <div style={{ position: "relative" }}>
      <Background bgImage={rush} alt="Rush Image">
        <div className="aboutImageText">
          <br />
          RUSH
        </div>
      </Background>
      <div className="mainContent" style={{ textAlign: "center" }}>
        <p>
          Rush is a period for anyone interested in Greek life to meet the members of the organization.
          By organizing events for interested parties to attend, we hope to provide an opportunity for
          students to get to know the brothers better and to learn more about our fraternity. Throughout
          rush week, we host events such as basketball and pong tournaments, barbecues, and more to get
          to meet the brothers. At the end of rush week, two rounds of interviews take place and bids are
          given to accepted new members.
        </p>
        <RushGraphic semester="Fall 2023" front={fa23front} back={fa23back} />
        <RushGraphic semester="Spring 2023" front={sp23front} back={sp23back} />
        <RushGraphic semester="Fall 2022" front={fa22front} back={fa22back} />
        <RushGraphic semester="Spring 2022" front={sp22front} back={sp22back} />
        <RushGraphic semester="Fall 2021" front={fa21front} back={fa21back} />
        <RushGraphic semester="Spring 2021" front={sp21front} back={sp21back} />
        <RushGraphic semester="Spring 2020" front={sp20front} back={sp20back} />
        <RushGraphic semester="Fall 2019" front={fa19front} back={fa19back} />
        <RushGraphic semester="Spring 2019" front={sp19front} back={sp19back} />
        <RushGraphic semester="Fall 2018" front={fa18front} back={fa18back} />
        <RushGraphic semester="Spring 2018" front={sp18front} back={sp18back} />
        <RushGraphic semester="Fall 2017" front={fa17front} back={fa17back} />
      </div>
    </div>
  )
}

export const getStaticProps: GetStaticProps<RushProps> = async () => {
  return { props: { title: "RUSH" } }
}
