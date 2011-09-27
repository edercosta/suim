(function() {
  window.onload = function() {
    var edit_mode, editor, latex, latexSrc, mathml, mathmlSrc, suim;
    suim = new Suim('editor', {
      changeMode: false
    });
    if (!Suim.browser.isFF()) {
      alert('Sorry, your browser is not supported yet.\nPlease use Firefox instead.');
    }
    suim.getWindow().focus();
    editor = document.getElementById('editor');
    mathmlSrc = document.getElementById('post_mathml');
    latexSrc = document.getElementById('post_latex');
    edit_mode = document.getElementById('edit_mode');
    latex = document.getElementById('tex_source');
    mathml = document.getElementById('mathml_source');
    edit_mode.onclick = function() {
      editor.style.display = 'block';
      edit_mode.style.backgroundColor = '#CCCCCC';
      mathmlSrc.style.display = 'none';
      mathml.style.backgroundColor = '#FAFAFA';
      latexSrc.style.display = 'none';
      return latex.style.backgroundColor = '#FAFAFA';
    };
    latex.onclick = function() {
      latexSrc.value = suim.getTeX();
      latexSrc.style.display = 'block';
      latex.style.backgroundColor = '#CCCCCC';
      editor.style.display = 'none';
      edit_mode.style.backgroundColor = '#FAFAFA';
      mathmlSrc.style.display = 'none';
      return mathml.style.backgroundColor = '#FAFAFA';
    };
    return mathml.onclick = function() {
      mathmlSrc.value = suim.getMathML();
      mathmlSrc.style.display = 'block';
      mathml.style.backgroundColor = '#CCCCCC';
      editor.style.display = 'none';
      edit_mode.style.backgroundColor = '#FAFAFA';
      latexSrc.style.display = 'none';
      return latex.style.backgroundColor = '#FAFAFA';
    };
  };
}).call(this);
