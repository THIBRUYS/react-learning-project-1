import ChartBar from './ChartBar';
import './Chart.css'

const Chart = (props) => {
    const dataPointsValue = props.dataPoints.map((datapoint) => (datapoint.value));
    const totalMaximum = Math.max(...dataPointsValue);

    return (
        <div className='chart'>
            {props.dataPoints.map((dataPoint) => {return (
                <ChartBar 
                    key={dataPoint.label} 
                    value={dataPoint.value} 
                    maxValue={totalMaximum} 
                    label={dataPoint.label}
                />
            )})}
        </div>
    )

}
export default Chart