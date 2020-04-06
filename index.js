const record = [
  {year: "2018", result: "L"},
  {year: "2017", result: "W"},
  {year: "2016", result: "N/A"}
];

function superbowlWin(record) {

    let winningRecord =  record.find(
                          row=> {
                            return (row.result=="W");
                          }
                      );
    let year;
    if (winningRecord){
        year =  winningRecord.year;
    }
    return year;
}
