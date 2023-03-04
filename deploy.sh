if [[ -z $(git status -s) ]]
then
  echo "Git index is clean."
else
  echo "Git index is dirty. Please commit changes before running this."
  exit
fi

git branch -D lesson1 lesson2 lesson3 lesson4 lesson5 lesson6 lesson7 lesson8 lesson9 lessonX
git branch -D lesson1-hw lesson2-hw lesson3-hw lesson4-hw lesson5-hw lesson6-hw lesson7-hw lesson8-hw lesson9-hw lessonX-hw

git checkout -b lessonX-hw && rm deploy.sh && git add -A && git commit --amend --no-edit && git push -f && \
git checkout -b lessonX && sed -i.bak '/*\//q' lessonX.ts && rm lessonX.ts.bak && git add -A && git commit --amend --no-edit && git push -f && \

git checkout -b lesson9-hw && rm lessonX.ts && git add -A && git commit --amend --no-edit && git push -f && \
git checkout -b lesson9 && sed -i.bak '/*\//q' lesson9.ts && rm lesson9.ts.bak && git add -A && git commit --amend --no-edit && git push -f && \

git checkout -b lesson8-hw && rm lesson9.ts && git add -A && git commit --amend --no-edit && git push -f && \
git checkout -b lesson8 && sed -i.bak '/*\//q' lesson8.ts && rm lesson8.ts.bak && git add -A && git commit --amend --no-edit && git push -f && \

git checkout -b lesson7-hw && rm lesson8.ts && git add -A && git commit --amend --no-edit && git push -f && \
git checkout -b lesson7 && sed -i.bak '/*\//q' lesson7.ts && rm lesson7.ts.bak && git add -A && git commit --amend --no-edit && git push -f && \

git checkout -b lesson6-hw && rm lesson7.ts && git add -A && git commit --amend --no-edit && git push -f && \
git checkout -b lesson6 && sed -i.bak '/*\//q' lesson6.ts && rm lesson6.ts.bak && git add -A && git commit --amend --no-edit && git push -f && \

git checkout -b lesson5-hw && rm lesson6.ts && git add -A && git commit --amend --no-edit && git push -f && \
git checkout -b lesson5 && sed -i.bak '/*\//q' lesson5.ts && rm lesson5.ts.bak && git add -A && git commit --amend --no-edit && git push -f && \

git checkout -b lesson4-hw && rm lesson5.ts && git add -A && git commit --amend --no-edit && git push -f && \
git checkout -b lesson4 && sed -i.bak '/*\//q' lesson4.js && rm lesson4.js.bak && git add -A && git commit --amend --no-edit && git push -f && \

git checkout -b lesson3-hw && rm lesson4.js && git add -A && git commit --amend --no-edit && git push -f && \
git checkout -b lesson3 && sed -i.bak '/*\//q' lesson3.js && rm lesson3.js.bak && git add -A && git commit --amend --no-edit && git push -f && \

git checkout -b lesson2-hw && rm lesson3.js && git add -A && git commit --amend --no-edit && git push -f && \
git checkout -b lesson2 && sed -i.bak '/*\//q' lesson2.js && rm lesson2.js.bak && git add -A && git commit --amend --no-edit && git push -f && \

git checkout -b lesson1-hw && rm lesson2.js && git add -A && git commit --amend --no-edit && git push -f && \
git checkout -b lesson1 && sed -i.bak '/*\//q' lesson1.js && rm lesson1.js.bak && git add -A && git commit --amend --no-edit && git push -f && \

git checkout master && git status
