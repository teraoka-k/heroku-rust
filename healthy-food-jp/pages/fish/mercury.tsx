import Note from '../../components/Note'
import Comment from '../../components/Comment'
import Table from '../../components/Table'

export default function mercury() {
  return (
    <div>
      <h1>さかなと水銀</h1>
      <Note
        text="さかなは心臓病を予防する"
        explanation="Fish, ω-3 Polyunsaturated Fatty Acids, and Mortality From Cardiovascular Diseases in a Nationwide Community-Based Cohort of Japanese Men and Women: The JACC (Japan Collaborative Cohort Study for Evaluation of Cancer Risk) Study"
        quote="We found an inverse association between fish and ω-3 PUFA dietary intakes and cardiovascular mortality, especially for heart failure, suggesting a protective effect of fish intake on cardiovascular diseases."
        link="https://www.sciencedirect.com/science/article/pii/S0735109708021955?via%3Dihub"
      ></Note>
      <h2>水銀がよくない</h2>
      <p>さかなには水銀が含まれている</p>
      <Note text="水銀を摂取すると、からだによくない"></Note>
      <h2>水銀を何グラム摂るとダメか</h2>
      <Note
        text="1週間あたり、(1.6 μg/kg) × (体重kg) だ"
        quote="Tolerable Intake:	PTWI 1.6 µg/kg bw"
        link="https://apps.who.int/food-additives-contaminants-jecfa-database/chemical.aspx?chemID=3083"
      ></Note>
      <p>体重が50 kg なら、1日に 11.1 μg まで摂取できる</p>
      <Comment text="μgは100万分の1グラム."></Comment>
      <Comment text="毎日11.1μg、100年食べ続けても、体内の水銀総量は、約966μgに収束して、それ以上蓄積しない。60日で半減するから。"></Comment>
      <h2>さかなは1日に何グラムまで食べられるの</h2>
      <Note
        text="厚生労働省がさかなに何グラムの水銀があるか調べてくれた"
        quote="厚生労働省、水産庁、地方自治体及び諸外国等において実施された魚介類（鯨類を含む。以下同じ。）に含まれる水銀濃度に関する検査結果を取りまとめた。"
        link="https://www.mhlw.go.jp/topics/bukyoku/iyaku/syoku-anzen/suigin/dl/050812-1-05.pdf"
      ></Note>
      <p>水銀の量から、食べられるさかなの量がきちんと分かる</p>
      <Table bodyWeight={50}></Table>
    </div>
  )
}
