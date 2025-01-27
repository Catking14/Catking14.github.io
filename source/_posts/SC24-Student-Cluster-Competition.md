---
title: SC24 Student Cluster Competition
categories:
  - SCC
tags:
  - SC24
  - NTHU
date: 2024-12-28 22:24:58
---


![](/images/sc24/SC24-SCC-16.jpg)

What an amazing journey in Georgia, Atlanta! 

At the very end of 2024, I am pleasant to be invited as one of the members attending the Student Cluster Competition (SCC) in SC24 for team NTHU. SC24 SCC is one of the biggest student cluster competition in the world. In this competition, 11 teams from all over the globe have to run multiple benchmarks including HPL, MLPerf, and a mystery benchmark with other application tasks including NAMD, ICON, reproducibility challenge, and a mystery application in 48 hours non-stop competition. We have to start from building our own cluster from scratch including deciding the system components, hardware and software suites, topology configurations, and performance tuning. We were given the power limit of 4.5 kW in total and 2 kW limit per node with the restriction of minimum 3 nodes. We have to push the performance to the limit while maintaining the power consumption under the restriction. In addition to performance, we have to be familiar to those HPC applications about atmosphere simulation (ICON) and molecular dynamics (NAMD) to complete specific challenges given on site, which not only tests the familiarity about the usage of application itself, but the knowledge about their domain to have better understanding on given tasks. Performance tuning, domain knowledge, and teamwork, this competition needs us to use every tricks in the book to become the best in the best. The only award in this competition besides the one for highest linpack is the Overall Winner. That is, winner takes all and nothing for others except highest linpack (HPL). 

In this competition, I am in charge of the optimization of MLPerf Inference benchmark and NAMD application challenge. In about 3 months of preparation, we start from deciding our hardware and topology, install related dependencies, reading docs of these applications, and investigate as much configurations for performance as possible. Since the task is given on site, we can only use public testcases published on the internet to get familiar with those applications and figure out the meaning of these testcases in chemistry. These chemical simulations are not only complicated, but also took lots of time. It is crucial to measure the simulation time by the parameters in input files carefully to allocate time and resources on each part. As for MLPerf benchmark, the task this year is to run SDXL offline and achieve highest throughput as possible. We have to make the best use of our GPUs to achieve the best throughput while maintaining the power under the limit during the entire run. To be more aggressive or more conservative can affect the final result tremendously.

![](/images/sc24/personal.jpg)

Two days non-stop, with mentally and physically exhausted, team NTHU finally achieved **3rd** Place this year, right behind team Diablo from Tsinghua University and team Peking University. The SCC in SC24 not only is my first on-site international cluster competition with hardware provided by our sponsor, Quanta Cloud Technologies, but my first time of attending global conference in this scale. The experience in SC this year have truly broaden my horizon with the demonstration of cutting edge technologies and state-of-the-art researches. Thanks to all of my teammates, coaches, instructors, and staff from our sponsor and the committee of SC24. These wonderful memories would stay forever in my mind.


Know more from:
- [SC24 SCC Official Website](https://sc24.supercomputing.org/students/student-cluster-competition/)