/**
 각 로또 번호는 6개다.
 돈을 넣으면 살 수 있는 만큼 로또를 구매할 수 있다. (buyLottos 함수)
 로또 1장의 가격은 1000원이다.
  > buyLottos(14000); 
  > 로또 14개를 발행했습니다.
  [8, 21, 23, 41, 42, 43]
  [3, 5, 11, 16, 32, 38]
  [7, 11, 16, 35, 36, 44]
  [1, 8, 11, 31, 41, 42]
  [13, 14, 16, 38, 42, 45]
  [7, 11, 30, 40, 42, 43]
  [2, 13, 22, 32, 38, 45]
  [23, 25, 33, 36, 39, 41]
  [1, 3, 5, 14, 22, 45]
  [5, 9, 38, 41, 43, 44]
  [2, 8, 9, 18, 19, 21]
  [13, 14, 18, 21, 23, 35]
  [17, 21, 29, 37, 42, 45]
  
  > setLuckyNumber([1, 2, 3, 4, 5, 6]);
  
  > 당첨 통계
  ---------
  3개 일치 (5000원)- 1개
  4개 일치 (50000원)- 0개
  5개 일치 (1500000원)- 0개
  6개 일치 (2000000000원)- 0개
  나의 수익률은 OO%입니다.
  */
 

 
const setLuckyNumber = (numbers) => {
  return numbers;
}
  
const publishPapersByCount = (count = 0) => {
  const papers = [];
  
  for (let i = 0; i < count; i++) {
    const paper = [];
    
    for (let j = 0; j < 6; j++) {
      paper.push(0);
    }
    
    papers.push(paper);
  }
  
  return papers;
}
  
const getRandomLotto = (page) => {
  const totalLotto = page.map(item => {
    return item.map(() => {
      return Math.floor(Math.random() * 45) + 1;;
    });
  });
  
  return totalLotto;
}
  
const checkResult = (lottos) => {
  const luckyNumbers = setLuckyNumber([12, 25, 32, 41, 15, 6]);
  
  const result = lottos.map(lotto => {
    return lotto.filter(number => {
      return luckyNumbers.indexOf(number) >= 0;
    })
  })
  
  return result;
}
  
const displayResult = (lottos) => {
  const score = checkResult(lottos);
  let sameThr = 0;
  let sameFou = 0; 
  let sameFiv = 0;
  let sameSix = 0;
  let income = 0;
  
  score.forEach(lotto => {
    switch (lotto.length) {
      case 3 : sameThr++; break; 
      case 4 : sameFou++; break; 
      case 5 : sameFiv++; break; 
      case 6 : sameSix++; break; 
      default : break;
    }
  })

  income = sameThr * 5000 + sameFou * 50000 + sameFiv * 1500000 + sameSix * 2000000000;
  
  console.log(`당첨 통계`)
  console.log(`---------`)
  console.log(`3개 일치 (5000원)- ${sameThr}개`)
  console.log(`4개 일치 (50000원)- ${sameFou}개`)
  console.log(`5개 일치 (1500000원)- ${sameFiv}개`)
  console.log(`6개 일치 (2000000000원)- ${sameSix}개`)
  console.log(`나의 수익률은 ${income / money * 100}%입니다.`)
}

let money = 0;

const buyLottos = (price) => {
  money = price;
  const count = Math.floor(money / 1000);
  const papers = publishPapersByCount(count);
  const lottos = getRandomLotto(papers);
  displayResult(lottos);
}

buyLottos(2800);
