import './App.css';
import anychart from 'anychart'
import series from 'anychart'

function App() {
  anychart.onDocumentReady(function() {
    // create map
    var map = anychart.map();
  
    // create data set
    var dataSet = anychart.data.set(
        [{"id":"ID.AC","value":0},
              {"id":"ID.KI","value":1},
              {"id":"ID.JR","value":2},
              {"id":"ID.JT","value":3},
              {"id":"ID.BE","value":4},
              {"id":"ID.BT","value":5},
              {"id":"ID.JK","value":6},
              {"id":"ID.KB","value":7},
              {"id":"ID.LA","value":8},
              {"id":"ID.SL","value":9},
              {"id":"ID.BB","value":10},
              {"id":"ID.BA","value":11},
              {"id":"ID.JI","value":12},
              {"id":"ID.KS","value":13},
              {"id":"ID.NT","value":14},
              {"id":"ID.SE","value":15},
              {"id":"ID.SR","value":16},
              {"id":"ID.KR","value":17},
              {"id":"ID.GO","value":18},
              {"id":"ID.JA","value":19},
              {"id":"ID.KT","value":20},
              {"id":"ID.IB","value":21},
              {"id":"ID.SU","value":22},
              {"id":"ID.RI","value":23},
              {"id":"ID.SW","value":24},
              {"id":"ID.133","value":25},
              {"id":"ID.SB","value":26},
              {"id":"ID.YO","value":27},
              {"id":"ID.MA","value":28},
              {"id":"ID.NB","value":29},
              {"id":"ID.SG","value":30},
              {"id":"ID.ST","value":31},
              {"id":"ID.PA","value":32}]
    );
  
    
  });
  
  return (
    <div id="container">
    </div>
  );
}
export default App