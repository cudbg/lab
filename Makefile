TARGET=main
all: $(TARGET)

main: .
	git commit -m "updated site" .; git push


