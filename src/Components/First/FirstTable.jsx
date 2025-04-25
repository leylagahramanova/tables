import React, { useState } from 'react';
import Header from '../Header';
import Navbar from '../Navbar';
import { IoIosArrowDown } from "react-icons/io";
import './FirstTable.css';

const results = [
  { team: 'AZE', bib: 212, name: 'Amirbekov T.', d: '5.400', e: '8.800', pen: '0.3', app: '12.500', aa: '102.360', teamScore: '102.360', appScore: '7', aaScore: '4', teamRank: '12', apparatus: 'fx' },
  { team: 'AZE', bib: 132, name: 'Amirbekov T.', status: 'Wait', apparatus: 'ph' },
  { team: 'TUR', bib: 624, name: 'Amirbekov T.', d: '5.400', e: '8.800', pen: '0.3', app: '12.500', aa: '102.360', teamScore: '102.360', appScore: '7', aaScore: '4', teamRank: '12', apparatus: 'sr' },
  { team: 'FRA', bib: 624, name: 'Amirbekov T.', status: 'Go', apparatus: 'vt' },
  { team: 'ISR', bib: 401, name: 'Amirbekov T.', d: '5.400', e: '8.800', pen: '0.3', app: '12.500', aa: '102.360', teamScore: '102.360', appScore: '16', aaScore: '8', teamRank: '17', apparatus: 'pb' },
  { team: 'GER', bib: 102, name: 'Amirbekov T.', d: '5.400', e: '8.800', pen: '0.3', app: '12.500', aa: '102.360', teamScore: '102.360', appScore: '16', aaScore: '8', teamRank: '17', apparatus: 'hb' },
  { team: 'GER', bib: 102, name: 'Amirbekov T.', status: 'Inquiry Submitted', apparatus: 'hb', d: '5.400', e: '8.800', pen: '0.3', app: '12.500', aa: '102.360', teamScore: '102.360', appScore: '16', aaScore: '8', teamRank: '17' }
];

const FirstTable = () => {
  const [expanded, setExpanded] = useState(null);

  const toggleExpand = (index, status) => {
    setExpanded(expanded === index ? null : index);
  };

  const getStatusClassName = (status) => {
    if (!status) return '';
    return status.toLowerCase().replace(' ', '-');
  };

  return (
    <div className="App">
      <Header />
      <Navbar />

      <div className="table-wrapper">
        {/* Mobile View */}
        <div className="table-mobile">
          {results.map((row, index) => (
            <div className="mobile-row" key={index}>
              <div className="row-main" onClick={() => toggleExpand(index, row.status)}>
                <div className="left-section">
                  <img src={`/apparatus/${row.apparatus}.png`} alt={row.apparatus} className="apparatus-icon" />
                  <div className="team-info">
                    <img src={`/flags/${row.team}.png`} alt={row.team} className="flag" />
                    <span className="team-name">{row.team}</span>
                  </div>
                  <span className="athlete-name">{row.name}</span>
                </div>

                <div className="right-section">
                  {row.status ? (
                    <div className="status-with-arrow">
                      <span className={getStatusClassName(row.status)}>{row.status}</span>
                      {row.status === 'Inquiry Submitted' && (
                        <span className={`expand-arrow ${expanded === index ? 'expanded' : ''}`}>
                          <IoIosArrowDown />
                        </span>
                      )}
                    </div>
                  ) : (
                    <>
                      <span className="score-total">{row.app}</span>
                      <span className={`expand-arrow ${expanded === index ? 'expanded' : ''}`}>
                        <IoIosArrowDown />
                      </span>
                    </>
                  )}
                </div>
              </div>

              {/* Conditionally render the details */}
              {expanded === index && !row.status && (
                <div className="details">
                  <div className="score-details">
                    <div className="score-row">
                      <span>D: {row.d}</span>
                      <span>E: {row.e}</span>
                      <span>P: {row.pen}</span>
                    </div>
                  </div>
                  <div className="rank-details">
                    <div className="rank-row">
                      <span>App</span>
                      <div className="score-with-rank">
                        <span>{row.app}</span>
                        <span className="rank">{row.appScore}</span>
                      </div>
                    </div>
                    <div className="rank-row">
                      <span>AA</span>
                      <div className="score-with-rank">
                        <span>{row.aa}</span>
                        <span className="rank">{row.aaScore}</span>
                      </div>
                    </div>
                    <div className="rank-row">
                      <span>Team</span>
                      <div className="score-with-rank">
                        <span>{row.teamScore}</span>
                        <span className="rank">{row.teamRank}</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              {expanded === index && row.status === 'Inquiry Submitted' && (
                <div className="details">
                  <div className="score-details">
                    <div className="score-row">
                      <span>D: {row.d}</span>
                      <span>E: {row.e}</span>
                      <span>P: {row.pen}</span>
                    </div>
                  </div>
                  <div className="rank-details">
                    <div className="rank-row">
                      <span>App</span>
                      <div className="score-with-rank">
                        <span>{row.app}</span>
                        <span className="rank">{row.appScore}</span>
                      </div>
                    </div>
                    <div className="rank-row">
                      <span>AA</span>
                      <div className="score-with-rank">
                        <span>{row.aa}</span>
                        <span className="rank">{row.aaScore}</span>
                      </div>
                    </div>
                    <div className="rank-row">
                      <span>Team</span>
                      <div className="score-with-rank">
                        <span>{row.teamScore}</span>
                        <span className="rank">{row.teamRank}</span>
                      </div>
                    </div>
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
              <th>App</th>
              <th>AA</th>
              <th>Team</th>
            </tr>
          </thead>
          <tbody>
            {results.map((row, index) => (
              <tr key={index}>
                <td>
                  <div className="team-info">
                    <img src={`/apparatus/${row.apparatus}.png`} alt={row.apparatus} className="apparatus-icon" />
                    <img src={`/flags/${row.team}.png`} alt={row.team} className="flag" />
                    <span>{row.team}</span>
                    <span>{row.bib}</span>
                    <span>{row.name}</span>
                    {row.status === 'Inquiry Submitted' ? (
                      <>
                        <span className={getStatusClassName(row.status)}>{row.status}</span>
                        <span>D: {row.d}</span>
                        <span>E: {row.e}</span>
                        <span>P: {row.pen}</span>
                        <div className="score-with-rank">
                          <span>{row.app}</span>
                          <span className="rank">{row.appScore}</span>
                        </div>
                      </>
                    ) : row.status ? (
                      <span className={getStatusClassName(row.status)}>{row.status}</span>
                    ) : (
                      <>
                        <span>D: {row.d}</span>
                        <span>E: {row.e}</span>
                        <span>P: {row.pen}</span>
                        <div className="score-with-rank">
                          <span>{row.app}</span>
                          <span className="rank">{row.appScore}</span>
                        </div>
                      </>
                    )}
                  </div>
                </td>
                <td>
                  {(!row.status || row.status === 'Inquiry Submitted') && (
                    <div className="score-with-rank">
                      <span>{row.aa}</span>
                      <span className="rank">{row.aaScore}</span>
                    </div>
                  )}
                </td>
                <td>
                  {(!row.status || row.status === 'Inquiry Submitted') && (
                    <div className="score-with-rank">
                      <span>{row.teamScore}</span>
                      <span className="rank">{row.teamRank}</span>
                    </div>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default FirstTable;
