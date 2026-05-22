# Don't Starve Together Character Finder

Don't Starve Together 캐릭터를 질문 기반으로 추천하는 정적 웹 앱입니다.

## 문서

- [추천 기준 v2](docs/factor-model-v2.md): 4팩터 정규화 모델과 캐릭터 추천 설계
- [질문지](docs/questions.md): 사이트에서 사용할 질문과 선택지 목록
- [질문-팩터 매핑 v2](docs/question-factor-map-v2.md): 질문 선택지를 4축 벡터로 변환하는 기준
- [캐릭터 후보 v2](docs/character-map-v2.md): 캐릭터별 유형 매칭과 조합 추천 기준

## 구성

- `index.html`: GitHub Pages에서 서빙되는 메인 페이지
- `styles.css`: 반응형 UI와 시각 스타일
- `script.js`: 질문 데이터, 캐릭터 데이터, 스코어링 로직
- `.nojekyll`: GitHub Pages가 정적 파일을 그대로 제공하도록 하는 표시 파일
- `.github/workflows/pages.yml`: GitHub Actions 기반 Pages 배포 설정

## 로컬 실행

별도 빌드가 필요 없습니다. `index.html`을 브라우저로 열면 됩니다.

간단한 로컬 서버로 확인하려면:

```powershell
python -m http.server 8080
```

그 다음 `http://localhost:8080`으로 접속하세요.

## GitHub Pages 배포

이 프로젝트에는 `.github/workflows/pages.yml`이 포함되어 있습니다.

1. 이 폴더를 GitHub 저장소로 올립니다.
2. GitHub 저장소의 `Settings` -> `Pages`로 이동합니다.
3. `Build and deployment`에서 `GitHub Actions`를 선택합니다.
4. `main` 브랜치에 push하면 Pages 배포가 실행됩니다.

## 데이터 기준

일반 선택 캐릭터는 무료/DLC 구분 없이 추천 후보에 포함하고, Wonkey는 `WNKY` 와일드카드 유형으로 별도 처리합니다. 현재 추천 로직은 공식 티어가 아니라 플레이 성향 매칭용 휴리스틱입니다.
