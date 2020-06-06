import { useState } from 'react'
import css from './Table.module.scss'
import { fishList } from '../data/records/fishList'

export interface TableProps {
  bodyWeight: number
}

const Table = (props: TableProps) => {
  const [bodyWeight, setBodyWeight] = useState(props.bodyWeight)
  const [sortableFishLit, sortFishList] = useState(Array.from(fishList))

  return (
    <div>
      <input
        type="range"
        value={bodyWeight}
        onChange={(e) => setBodyWeight(Number(e.target.value))}
      ></input>
      体重: {bodyWeight} kg の場合
      <table>
        <thead></thead>
        <tbody>
          <tr>
            <th>さかなの種類</th>
            <th>1週間で食べても平気な量(グラム)</th>
            <th>毎日食べても平気な量(グラム)</th>
          </tr>
          {fishList.map((fish, i) => (
            <tr key={i}>
              <td>{fish.name}</td>
              <td>{Math.round(fish.ptwiG(bodyWeight))}</td>
              <td>{Math.round(fish.ptdiG(bodyWeight))}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Table
