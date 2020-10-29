window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    startGame();
  };

  function startGame() {
 
  }
};

 
 const drawingApp = {
   name: 'Drawing app',
   canvasTag: undefined,
   ctx: undefined,
   canvasSize: {
     w: undefined,
     h: undefined
    },

    init(id) {
      this.canvasTag = document.getElementById(id)
      this.ctx = this.canvasTag.getContext('2d')
      this.setDimensions()
      this.drawRectangle ()
      this.drawContinuousLines()
      this.drawDashedLines()
      this.drawDashedLines() 
      
      console.log(this.ctx)    
     },

    setDimensions() {
      this.canvasSize.w = 500
      this.canvasSize.h = 700
      this.canvasTag.setAttribute('width', this.canvasSize.w)
      this.canvasTag.setAttribute('height', this.canvasSize.h)
     },


    drawRectangle() {
      this.ctx.fillStyle = 'green'
      this.ctx.fillRect(0,0, this.canvasSize.w, this.canvasSize.h)
      this.ctx.fillStyle = 'grey'
      this.ctx.fillRect(50,0, this.canvasSize.w -100, this.canvasSize.h)
     },
      
    drawContinuousLines() {
      this.ctx.lineWidth = 7
      this.ctx.strokeStyle = 'white'
      this.ctx.beginPath()
      this.ctx.moveTo(65, 0)
      this.ctx.lineTo(65, this.canvasSize.h)
      this.ctx.stroke()

      this.ctx.lineWidth = 7
      this.ctx.strokeStyle = 'white'
      this.ctx.beginPath()
      this.ctx.moveTo(this.canvasSize.w -65, 0)
      this.ctx.lineTo (this.canvasSize.w -65, this.canvasSize.h)
      this.ctx.stroke()
     },
       
    
    drawDashedLines() {
      this.ctx.lineWidth = 5
      this.ctx.beginPath()
      this.ctx.setLineDash([50, 30])      
      this.ctx.moveTo(this.canvasSize.w / 2, 0)
      this.ctx.lineTo(this.canvasSize.w / 2, this.canvasSize.h)
      this.ctx.stroke()
    },
    
    drawImage(imgName) {
      let imageInstance = new Image()
      imageInstance.src = `img/${imgName}`
      imageInstance.onload = () => this.ctx.drawImage(imageInstance, 100, 100, 200, 200)
    }
 }


 const carApp = {
  name: 'Car app',
  canvasTag: undefined,
  ctx: undefined,
  car:[],
  frames: 0,
  car: undefined,
  

  canvasSize: {
    w: undefined,
    h: undefined
   },

   init(id) {
     this.canvasTag = document.getElementById(id)
     this.ctx = this.canvasTag.getContext('2d')
     this.setDimensions()
     this.createCamels()
     this.drawAll()
    
    console.log(this.ctx)       
    },
    
    setDimensions() {
      this.canvasSize = {
       w: window.innerWidth,
       h: window.innerHeight
      }
      this.canvasTag.setAttribute('width', this.canvasSize.w)
      this.canvasTag.setAttribute('height', this.canvasSize.h)
      },
      
      createcar() {
       this.car = new car(this.ctx, 0, 0, 200, 200, 4, 'car.png')
      },  
      setEventListeners() {
        document.onkeydown = e => {
            e.keyCode === this.keys.left ? this.ball.move('left') : null
            e.keyCode === this.keys.right ? this.ball.move('right') : null
        }
    },

    drawAll() {
        setInterval(() => {
            this.frames++
            this.frames % 50 === 0 ? this.generateObstacle() : null
            this.clearScreen()
            this.car.draw()
        }, 70)
    },

    clearScreen() {
        this.ctx.clearRect(0, 0, this.canvasSize.w, this.canvasSize.h)
    },

    generateObstacle() {
        console.log('NUEVO OBSTÁCULO! CUIDAO QUE VA!')
    }

 }








  drawingApp.init('canvas')
  drawingApp.setDimensions ('canvas')
  drawingApp.drawRectangle('canvas')
  drawingApp.drawContinuousLines ('canvas')
  drawingApp.drawDashedLines('canvas')
  drawingApp.drawimage('car.png('canvas')


