import React from 'react';
import FeatureForm from './FeatureForm'
import Options from './Options'
import MainFormSection from './MainFormSection'

class MainForm extends React.Component {

  render() {
    const features = Object.keys(this.props.features)
      .map(key => {
        const options = this.props.features[key].map((item, index) => {
          const selectedClass = item.name === this.props.selected[key].name ? 'feature__selected' : '';
          const featureClass = 'feature__option ' + selectedClass;
          return (
            <Options 
            key={key}
            featureClass={featureClass} 
            selectedClass={selectedClass} 
            item={item} 
            index={index} 
            mapKey={key}
            updateFeature={(key, index) => this.props.updateFeature(key, index)}/>
          )
        });

        return <FeatureForm 
          key={key}
          mapKey={key} 
          options={options}/>
      });


    return (
        <MainFormSection features={features} />
    )
  }
}

export default MainForm