import './console-frame.scss';

const initialize = (doc) => {
  let iframe = doc.createElement('iframe');
  iframe.src = browser.runtime.getURL('build/console.html');
  iframe.id = 'vimvixen-console-frame';
  iframe.className = 'vimvixen-console-frame';
  doc.body.append(iframe);

  return iframe;
};

const blur = (doc) => {
  let iframe = doc.getElementById('vimvixen-console-frame');
  iframe.blur();
};

export { initialize, blur };
