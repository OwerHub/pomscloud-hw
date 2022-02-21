<template>
  <div class="about">
    <h1>Gyakorlófeladat</h1>

    <p>
      Sziasztok! Köszönöm a feladatot! Izgalmas volt egy számomra alig ismert
      rendszerrel dolgozni.
    </p>

    <p>
      A próbafeladat két verzióban készült el, szombatra megoldottam
      <b>props</b>-okkal és <b>$emit</b>-ekkel a feladatok nagy részét, majd tanulás
      céljából elkezdtem kísérletezni a nekem teljesen új <b>Vuex</b>-el.... végül az
      <b>egész szerkezetet átírtam</b>.
    </p>

    <p>
      Az eredeti file-ok az <b>older-solution</b> mappába kerültek, úgy tapasztaltam,
      sosem árt, ha meg tudjuk nézni saját korábbi, működő kódjainkat, és talán
      próbafeladatnak sem árt, ha több megoldást adok be.
    </p>

    <p>
      A lapozást nyilván könnyebben megoldhattam volna egy letöltött pagination
      könyvtárral vagy bootstrap-el (éles helyzetben valami hasonlót tennék), de
      inkább <b>írtam egy saját megoldást</b>, így többet tanultam.
    </p>

    <p>
      A stílusokra, reszponzivitásra most nem fordítottam nagy figyelmet, ha jól
      értem, a feladatnak ez nem volt lényege. Nem használtam se tailwind-et, se más
      libary-t (bár a végső formázásnál az SCSS-el könnyebb lett volna).
    </p>

    <p>
      Remélem, jól értelmeztem a feladatokat, és a megoldásaim elnyerik a
      tetszéseteket.
    </p>

    <p>
      Tisztelettel: <br />
      <em>Viszlói Attila</em>
    </p>
  </div>
</template>

<style>
p {
  margin: 2rem auto;
  padding: 0 2rem;
  max-width: 850px;
  text-align: left;
  font-size: 115%;
}

p:last-child {
  text-align: end;
}
</style>
