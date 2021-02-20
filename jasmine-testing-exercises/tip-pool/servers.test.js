describe("Servers test (with setup and tear-down)", function() {
  beforeEach(function () {
    // initialization logic
    serverNameInput.value = 'Alice';
  });

  it('should add a new server to allServers on submitServerInfo()', function () {
    submitServerInfo();

    expect(Object.keys(allServers).length).toEqual(1);
    expect(allServers['server' + serverId].serverName).toEqual('Alice');
  });

  it('should update server table on upDateServerTable()', function(){

    submitServerInfo();
    // updateServerTable();
    let currTdata = document.querySelectorAll('#serverTable tbody tr td');
    expect(currTdata.length).toEqual(2);
    expect(currTdata[0].innerText).toEqual('Alice')
    expect(currTdata[1].innerText).toEqual('$0.00')
    //  expect(currTdata[2].innerText).toEqual('X')
  });

  it('should not update the server table with an empty input ',function() {
    serverNameInput.value = '';
    submitServerInfo();

    expect(Object.keys(allServers).length).toEqual(0);
  })

  afterEach(function() {
    serverId = 0;
    allServers = {};
    serverTbody.innerText ="";
  });


});
