$(document).ready(function() {
  $("#title_button").click(function()
  {
    alert('here');
    var title = document.getElementById('new_title').value;
    var state = wave.getState();
    var delta = {};
    delta['title'] = title;
    state.submitDelta(delta);
  }
  function addEntry()
  {
    var state = wave.getState();
    var entries = state.get('entries', false);
    var entryCount = 0;
    if(entries)
    {
      entryCount = entries.length;
      alert(entryCount);
    }
    var newEntry = document.getElementById('new_entry').value;
    var entryName = 'entry' + entryCount;
    alert(entries);
    alert(entryName);

    var delta = {};
    delta['entries'] = { entryName : newEntry };
    alert(delta['entries']);
    state.submitDelta(delta);
  }

  function render()
  {
    alert('render with jquery');
    if(!wave.getState())
    {
      return;
    }
    var state = wave.getState();
    var title = state.get('title', false);
    var entries = state.get('entries', false);
    if(title)
    {
      document.getElementById('strowl_poll').innerHTML = title + "<br /><input id='new_entry' size='30'><button onclick='addEntry()'>Add entry</button><br /><div id='entries'></div>";
      if(entries)
      {
        for(var i = 0; i < entries.length; i++)
        {
          document.getElementById('entries').innerHTML = i;
        }
      }
    }
  }

  function init()
  {
    if(wave && wave.isInWaveContainer())
    {
      wave.setStateCallback(render);
      wave.setParticipantCallback(render);
    }
  }
  gadgets.util.registerOnLoadHandler(init);
});