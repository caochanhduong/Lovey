import './App.css';
import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      maleName: '',
      femaleName: '',
      percent: 0.0,
      imageUrl: 'question.png'
    };
  }

  onChangeMale = (event) => {
    this.setState({maleName: event.target.value})
  }
  onChangeFeMale = (event) => {
    this.setState({femaleName: event.target.value})
  }

  charCount(str, letter) 
  {
  var letterCount = 0;
    for (var position = 0; position < str.length; position++) 
    {
      if (str.charAt(position) === letter) 
        {
        letterCount += 1;
        }
    }
    return letterCount;
  }

  onCalculate = (event) => {
    var percent = ""

    var fullString = this.state.maleName + this.state.femaleName;
    fullString = fullString.toLowerCase();

    percent += this.charCount(fullString, "l").toString();
    percent += this.charCount(fullString, "o").toString();
    percent += this.charCount(fullString, "v").toString();
    percent += this.charCount(fullString, "e").toString();
    percent += this.charCount(fullString, "s").toString();

    while(percent.length > 2) {
      var tmp = percent;
      percent = "";
      for (let index = 1; index < tmp.length; index++) {
        var sum = parseInt(tmp[0]) + parseInt(tmp[index]);
        percent += sum.toString(); 
      }
    }

    this.setState({
      percent: percent
    });

    if (percent < 50) {
      this.setState({
        imageUrl: "cry.png"
      });
    } else if (percent < 80) {
      this.setState({
        imageUrl: "smile.png"
      });
    } else {
      this.setState({
        imageUrl: "love.png"
      });
    }
  }
  render() {
    return (
      <div className="App">
        <img id="logo" src="lovey_logo.png"></img> <br/>
        <label className="AppLabel">Nhập tên bạn nam</label> <br/> <input className="inputname" value={this.state.maleName} onChange={this.onChangeMale} placeholder="Vui lòng nhập tiếng Việt không dấu"></input> <br/>
        <label className="AppLabel">Nhập tên bạn nữ</label> <br/><input className="inputname" value={this.state.femaleName} onChange={this.onChangeFeMale} placeholder="Vui lòng nhập tiếng Việt không dấu"></input><br/><br/>
        <button className="ButtonBackground" onClick={this.onCalculate}><span className="ButtonText">Tính toán</span></button> <br/> <br/>
        <label className="AppLabel"> Độ tương hợp giữa 2 bạn là: <b>{this.state.percent} %</b></label> <br/> <br/>
        <img id="emotion" src={this.state.imageUrl}></img>
      </div>
    );
  }
}

export default App;
