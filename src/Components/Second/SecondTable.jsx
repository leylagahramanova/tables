import React, { useState } from 'react';
import Header from '../Header';
import Navbar from '../Navbar';
import { IoIosArrowDown } from "react-icons/io";

const results = [
  { rank: 1, team: 'RUS', bib: 212, name: 'Bonartsev Aleksandr', d: '43.833', e: '43.833', pen: ['43.833', '43.833'], total: ['102.256', '102.256', '102.256'] },
  { rank: 2, team: 'EST', bib: 132, name: 'Bonartsev Aleksandr', d: '42.550', e: '43.000', pen: ['43.833', '43.833'], total:['102.256', '102.256', '102.256'] },
  { rank: 3, team: 'POR', bib: 109, name: 'Bonartsev Aleksandr', d: '44.000', e: '42.900', pen: ['43.833', '43.833'], total: ['102.256', '102.256', '102.256'] },
  { rank: 4, team: 'ISR', bib: 109, name: 'Bonartsev Aleksandr', d: '44.000', e: '42.900', pen: ['43.833', '43.833'], total: ['102.256', '102.256', '102.256'] },
  { rank: 5, team: 'POL', bib: 109, name: 'Bonartsev Aleksandr', d: '44.000', e: '42.900', pen: ['43.833', '43.833'], total: ['102.256', '102.256', '102.256'] },
  { rank: 6, team: 'NED', bib: 109, name: 'Bonartsev Aleksandr', d: '44.000', e: '42.900', pen: ['43.833', '43.833'], total: ['102.256', '102.256', '102.256']},
  { rank: 7, team: 'GBR', bib: 109, name: 'Bonartsev Aleksandr', d: '44.000', e: '42.900', pen: ['43.833', '43.833'], total:['102.256', '102.256', '102.256'] },
];

const teams = ['All', ...new Set(results.map(r => r.team))];

const SecondTable = () => {
  const [expanded, setExpanded] = useState(null);
  const [selectedTeam, setSelectedTeam] = useState('All');

  const filteredResults = selectedTeam === 'All' ? results : results.filter(r => r.team === selectedTeam);

  const toggleExpand = (index) => {
    setExpanded(expanded === index ? null : index);
  };

  return (
    <div className="App">
      <Header />
      <Navbar />

      <div className="table-wrapper">
        {/* Mobile View */}
        <div className="table-mobile">
          {filteredResults.map((row, index) => (
            <div key={index} className="mobile-row">
              <div className="row-main" onClick={() => toggleExpand(index)}>
                <span className="rank">{row.rank}</span>
                <div className="team-info">
                  <span className="team-name">{row.team}</span>
                </div>
                <span className="athlete-name">{row.name}</span>
                <span className="score-total">{row.bib}</span>
                <span className={`expand-arrow ${expanded === index ? 'expanded' : ''}`}><IoIosArrowDown /></span>
              </div>
              {expanded === index && (
                <div className='details'>
                  <div className="col-details">
                    <p><strong>D:</strong> {row.d}</p>
                    <p><strong>E:</strong> {row.e}</p>
                    <p><strong>P:</strong> {row.pen}</p>
                  </div>
                  <div className="row-details">
                    <p><strong>Bib:</strong> {row.bib}</p>
                    <p><strong>Total:</strong>
                      <div style={{ display: 'flex', flexDirection: "column", gap: "1rem" }}>
                        {row.total}
                      </div>
                    </p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Desktop View */}
        <table className="score-table">
          <thead>
            <tr>
              <th>Rank</th><th>Team</th><th>Bib</th><th>Name</th>
              <th>D</th><th>E</th><th>Pen</th><th>Total</th>
            </tr>
          </thead>
          <tbody>
            {filteredResults.map((row, index) => (
              <tr key={index}>
                <td><div className='rank'>{row.rank}</div></td>
                <td>
                  <img src={`/flags/${row.team}.png`} alt={row.team} className="flag" />
                  {row.team}
                </td>
                <td>{row.bib}</td>
                <td>{row.name}</td>
                <td>{row.d}</td>
                <td>{row.e}</td>
                <td>{row.pen}</td>
                <td>{row.total}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SecondTable;