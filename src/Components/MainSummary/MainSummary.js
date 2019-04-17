import React from 'react';
import SummarySection from './SummarySection';
import SummaryTotal from './SummaryTotal';

class MainSummary extends React.Component {
  render() {
    const summary = Object.keys(this.props.selected).map(key => (
      <SummarySection mapKey={key} selected={this.props.selected} />
    ));

    const total = Object.keys(this.props.selected).reduce(
      (acc, curr) => acc + this.props.selected[curr].cost,
      0
    );

    return <SummaryTotal summary={summary} total={total} />;
  }
}

export default MainSummary;
