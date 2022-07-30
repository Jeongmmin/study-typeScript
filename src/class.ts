// 단어사전 만들기

// object의 type을 설명할 때 사용
type Words = {
  [key: string]: string;
};

class Dict {
  private words: Words;
  constructor() {
    this.words = {};
  }
  add(word: Word) {
    if (this.words[word.term] === undefined) {
      this.words[word.term] = word.def;
    }
  }
  get(term: string) {
    return this.words[term];
  }
  delete(term: string) {
    return delete this.words[term];
  }
  update(term: string, newDef: string) {
    this.words[term] = newDef;
    return this.words[term];
  }
  showAll() {
    for (var key in this.words) {
      console.log(`${key} : ${this.words[key]}`);
    }
  }
  count() {
    return Object.keys(this.words).length;
  }
}

class Word {
  constructor(public term: string, public def: string) {}
}

const abstract_mean = new Word('abstract', '추상적');
const implements_mean = new Word('implements', '구현');
const method = new Word('method', 'class 안의 함수를 의미함');

const dict = new Dict();

dict.add(abstract_mean);
dict.add(implements_mean);
dict.add(method);

dict.get('abstract');

dict.delete('implements');

dict.update('abstract', '추상적인 이라는 의미');

dict.showAll();

console.log(dict.count());
