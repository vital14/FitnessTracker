<div class="progress-bar">
    <progress value="" max="4000"  style="visibility:hidden;height:0;width:0;"></progress>
  </div>

  <style>
@property --progress-value {
  syntax: "<integer>";
  initial-value: 0;
  inherits: false;
}

.progress-bar {
  display: flex;
  justify-content: center;
  align-items: center;

  width: 300px;
  height: 300px;
  border-radius: 50%;
  background: 
    radial-gradient(closest-side, white 79%, transparent 80% 100%),
    conic-gradient(rgb(137, 207, 240) calc(var(--progress-value) * 1%), grey 0);
  animation: progress 2s 1 forwards;
}

.progress-bar::before {
  counter-reset: percentage var(--progress-value);
  content: counter(percentage)'/4000ml';
  animation: progress 2s 1 forwards;
}

</style>