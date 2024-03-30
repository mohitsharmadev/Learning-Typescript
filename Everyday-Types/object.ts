function object(pt: { z: number; n?: boolean }) {
  console.log(`the object properties ${pt.n}`);
  console.log(`the object properties ${pt.z}`);
}
object({ z: 45, n: false });
//optional parameter object using ?
object({ z: 45 });
function pName(obj: { first: string; last?: string }) {
  if (obj.last !== undefined) {
    console.log(obj.last.toUpperCase());
  }
  console.log(obj.last?.toUpperCase());
}
pName({ first: "hello" });
