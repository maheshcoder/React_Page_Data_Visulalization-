import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Body.css';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Cell } from 'recharts';

const Body = () => {
  const [statistics, setStatistics] = useState({
    mean: {},
    median: {},
    mode: {},
    variance: {},
    standard_deviation: {},
    interquartilerange: {},
  });

  useEffect(() => {
    async function fetchStatistics() {
      try {
        const statTypes = ['mean', 'median', 'mode', 'variance', 'standard_deviation', 'interquartilerange'];
        const promises = statTypes.map(async (statistic) => {
          const response = await axios.get(`http://localhost:5000/api/all_statistics2/${statistic}`);
          return [statistic, response.data];
        });
        const results = await Promise.all(promises);
        const updatedStatistics = Object.fromEntries(results);
        setStatistics(updatedStatistics);
      } catch (error) {
        console.error('Error fetching statistics:', error);
      }
    }
    fetchStatistics();
  }, []);

  const renderBarChart = (statistic) => {
    const data = Object.keys(statistics[statistic]).map((attribute) => ({
      name: attribute,
      value: statistics[statistic][attribute],
    }));

    const COLORS = ['#8884d8', '#83a6ed', '#8dd1e1', '#82ca9d', '#a4de6c', '#d0ed57', '#ffc658'];

    return (
      <div className="box">
        <h4 className='statistic'>{statistic}</h4>
        <div className="chart">
          <BarChart className='barchart' width={150} height={143} data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Bar dataKey="value" fill="#8884d8">
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Bar>
          </BarChart>
        </div>
      </div>
    );
  };

  return (
    <div className="layout-container">
      <div className="left-half">
        {renderBarChart('mean')}
        {renderBarChart('median')}
        {renderBarChart('mode')}
        {renderBarChart('variance')}
        {renderBarChart('standard_deviation')}
        {renderBarChart('interquartilerange')}
      </div>

      <div className="right-half">
        <p className="textarea" placeholder="Enter up to 150 words"><h1>About the Data</h1>
      
        <p className="para">
        The dataset in question encompasses essential attributes that play a pivotal role in the evaluation 
        and understanding of wine quality. Fixed acidity denotes the non-volatile acids, particularly
         tartaric acid, that contribute to the wine's overall acidity, impacting its taste and ability to
          age gracefully. Volatile acidity measures the presence of volatile acids, primarily acetic acid,
           which, if excessive, can introduce unwanted vinegar-like flavors. Citric acid, present in small
            quantities, enhances the wine's freshness and tartness. Residual sugar defines the wine's sweetness
             post-fermentation, influencing its perceived taste. Chlorides quantify the salt content, affecting
              mouthfeel and flavor. Free and total sulfur dioxide levels are crucial for preserving wine quality,
               protecting against oxidation and spoilage. Finally, the 'quality' attribute provides a subjective
                assessment of the wine's overall sensory appeal, vital for both consumers and winemakers seeking 
                to produce exceptional wines. This dataset serves as a valuable resource for exploring the intricate 
                relationships between chemical composition and wine quality, informing the art and science of winemaking.
</p>
        </p>
        
      </div>
      
       
    
    </div>
  );
};

export default Body;