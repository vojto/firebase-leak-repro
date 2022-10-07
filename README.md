This repository demostrates memory leak in Firebase tests.

To run:

1. `yarn` to install modules
2. `yarn test` to run the tests

The output will look something like this, and eventually run out of memory (since we're setting `--max_old_space_size=1024`)

```sh
 PASS  services/leak3.test.ts (95 MB heap size)
 PASS  services/leak2.test.ts (136 MB heap size)
 PASS  services/leak4.test.ts (163 MB heap size)
 PASS  services/leak5.test.ts (202 MB heap size)
 PASS  services/leak15.test.ts (242 MB heap size)
 PASS  services/leak6.test.ts (265 MB heap size)
 PASS  services/leak1.test.ts (308 MB heap size)
 PASS  services/leak14.test.ts (349 MB heap size)
 PASS  services/_leak.test.ts (391 MB heap size)
 PASS  services/leak39.test.ts (393 MB heap size)
 PASS  services/leak41.test.ts (433 MB heap size)
 PASS  services/leak17.test.ts (469 MB heap size)
 PASS  services/leak29.test.ts (509 MB heap size)
 PASS  services/leak27.test.ts (549 MB heap size)
 PASS  services/leak28.test.ts (590 MB heap size)
 PASS  services/leak26.test.ts (574 MB heap size)
 PASS  services/leak43.test.ts (617 MB heap size)
 PASS  services/leak12.test.ts (658 MB heap size)
 PASS  services/leak16.test.ts (700 MB heap size)
 PASS  services/leak30.test.ts (742 MB heap size)
 PASS  services/leak42.test.ts (783 MB heap size)
 PASS  services/leak44.test.ts (762 MB heap size)
 PASS  services/leak22.test.ts (801 MB heap size)
 PASS  services/leak32.test.ts (837 MB heap size)
 PASS  services/leak19.test.ts (877 MB heap size)
 PASS  services/leak24.test.ts (870 MB heap size)
 PASS  services/leak40.test.ts (910 MB heap size)
 PASS  services/leak9.test.ts (921 MB heap size)
 PASS  services/leak18.test.ts (961 MB heap size)
 PASS  services/leak31.test.ts (973 MB heap size)
 PASS  services/leak10.test.ts (997 MB heap size)
```
