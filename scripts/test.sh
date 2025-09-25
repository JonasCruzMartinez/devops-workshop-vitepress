#!/bin/bash
pnpm test
if [ $? -ne 0 ]; then exit 1; fi
echo "Tests: $(pnpm test -- --coverage | tail -1)"
