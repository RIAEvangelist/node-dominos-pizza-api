import {Address} from '../index.js';

  //full address examples
  const address1 = new Address(
      {
          street:'900 Clark Ave',
          city:'St. Louis',
          region:'MO',
          postalCode:'63102'
      }
  );

  const address2=new Address('111 Clark Ave, St. Louis, MO, 63102');

  console.dir(address1);
  console.dir(address2);