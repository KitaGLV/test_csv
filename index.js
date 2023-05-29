import _ from 'lodash';

export default function solution(content){
  // BEGIN
  // Task 1
  const passengers = content.split('\r\n').slice(1, -1).map((passenger) => passenger.split(','));
  const passengersCount = passengers.length;
  console.log('Всего пассажиров: ', passengersCount);

  // Task 2
  const embarkeds = _.uniq(passengers.map((passenger) => passenger[12]).filter((n) => n.length > 0));
  console.log('Наименования портов посадки: ', embarkeds);

  // Task 3
  const maleCount = passengers.filter((passenger) => passenger[5] === 'male').length;
  const femaleCount = passengersCount - maleCount;
  console.log(`Мужчин на корабле: ${maleCount} (${(maleCount/passengersCount*100).toFixed(2)}%)`);
  console.log(`Женщин на корабле: ${femaleCount} (${(femaleCount/passengersCount*100).toFixed(2)}%)`);

  // Task 4
  const survivedCount = passengers.filter((passenger) => passenger[1] !== '0').length;
  console.log(`Выживших пассажиров: ${survivedCount} (${(survivedCount/passengersCount*100).toFixed(2)}%)`);

  // Task 5
  const names = passengers.map((passenger) => passenger[4].split('.').slice(1).join('').slice(1, -1));
  const aNames = names.filter((name) => name.startsWith('A'));
  console.log('Пассажиры с именами на букву «А»: ', aNames);
  //END
}